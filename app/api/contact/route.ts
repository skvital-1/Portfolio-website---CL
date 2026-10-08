import { NextResponse } from "next/server";

const hits = new Map<string, number[]>(); // basic in-memory rate limit (per server instance)
const clean = (v: unknown, max: number) => String(v ?? "").replace(/[<>]/g, "").trim().slice(0, max);

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "anon";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  if (recent.length >= 3) return NextResponse.json({ error: "Too many messages. Try again in a few minutes." }, { status: 429 });
  hits.set(ip, [...recent, now]);

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  if (body.website) return NextResponse.json({ ok: true }); // honeypot filled: pretend success

  const name = clean(body.name, 100), email = clean(body.email, 150), message = clean(body.message, 4000);
  const project = clean(body.project, 60), budget = clean(body.budget, 60);
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || message.length < 10)
    return NextResponse.json({ error: "Check your name, email and message, then try again." }, { status: 400 });

  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return NextResponse.json({ error: "The form isn't set up yet. Please email directly." }, { status: 500 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [to], 
      reply_to: email, 
      subject: `Project enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nProject: ${project}\nBudget: ${budget}\n\n${message}`,
    }),
  });
  if (!res.ok) return NextResponse.json({ error: "Message could not be sent. Please email directly." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
