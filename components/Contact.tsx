"use client";
import { useState } from "react";
import Section from "./Section";
import { profile } from "@/lib/content";

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const [failMsg, setFailMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const errs: Errors = {};
    if (!d.name?.trim()) errs.name = "Enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email?.trim() ?? "")) errs.email = "Enter a valid email, like name@example.com.";
    if ((d.message?.trim().length ?? 0) < 10) errs.message = "Write a short message about your project.";
    setErrors(errs);
    if (Object.keys(errs).length) { (form.querySelector("[aria-invalid='true']") as HTMLElement | null)?.focus(); return; }
    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Message could not be sent.");
      setState("ok"); form.reset();
    } catch (err) { setFailMsg((err as Error).message); setState("fail"); }
  }

  return (
    <Section id="contact" title="Let’s talk">
      <p className="-mt-1 mb-8 max-w-[40em] text-muted">Tell me about your project. I reply within two working days, or email <a className="text-accent underline" href={`mailto:${profile.email}`}>{profile.email}</a> directly.</p>
      <form onSubmit={onSubmit} noValidate className="grid max-w-[620px] gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5 font-semibold">Name
            <input name="name" autoComplete="name" required className="field" aria-invalid={!!errors.name} />
            <span className="err">{errors.name}</span>
          </label>
          <label className="grid gap-1.5 font-semibold">Email
            <input name="email" type="email" autoComplete="email" required className="field" aria-invalid={!!errors.email} />
            <span className="err">{errors.email}</span>
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5 font-semibold">Project type
            <select name="project" className="field"><option>Mobile app</option><option>Website or web app</option><option>Design system</option><option>Full-time role</option><option>Something else</option></select>
          </label>
          <label className="grid gap-1.5 font-semibold">Budget range (optional)
            <select name="budget" className="field"><option>Not sure yet</option><option>Under $2,000</option><option>$2,000 to $10,000</option><option>$10,000+</option></select>
          </label> 
        </div>
        <label className="grid gap-1.5 font-semibold">Message
          <textarea name="message" rows={5} required className="field" aria-invalid={!!errors.message} />
          <span className="err">{errors.message}</span>
        </label>
        <div className="absolute -left-[9999px]" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <div><button type="submit" disabled={state === "sending"} className="btn btn-p disabled:opacity-60">{state === "sending" ? "Sending…" : "Send message"}</button></div>
        <div role="status" aria-live="polite">
          {state === "ok" && <p className="rounded-xl border-2 border-accent bg-surface p-4">Message sent. Thank you, I’ll reply within two working days.</p>}
          {state === "fail" && <p className="rounded-xl border-2 border-danger bg-surface p-4">{failMsg} You can also write to <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>.</p>}
        </div>
      </form>
    </Section>
  );
}
