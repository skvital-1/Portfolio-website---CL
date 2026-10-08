import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/content";

const links = [["Work", "#work"], ["Process", "#process"], ["About", "#about"]];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <nav aria-label="Main" className="wrap flex h-16 items-center gap-5">
        <a href="#top" className="mr-auto font-display text-xl font-extrabold no-underline">{profile.name}</a>
        {links.map(([label, href]) => (
          <a key={href} href={href} className="hidden font-medium text-muted no-underline hover:text-ink sm:inline">{label}</a>
        ))}
        <ThemeToggle />
        <a href="#contact" className="btn btn-p">Let’s talk</a>
      </nav>
    </header>
  );
}
