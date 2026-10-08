import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line pb-10 pt-8 text-muted">
      <div className="wrap flex flex-wrap justify-between gap-x-7 gap-y-4">
        <span>© {new Date().getFullYear()} {profile.name}. {profile.location}.</span>
        <span className="flex flex-wrap gap-4">
          {profile.socials.map((s) => <a key={s.label} href={s.href} className="hover:text-ink">{s.label}</a>)}
        </span>
      </div>
    </footer>
  );
}
