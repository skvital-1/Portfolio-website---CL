import Image from "next/image";
import Section from "./Section";
import { profile } from "@/lib/content";

const initials = profile.name.split(" ").filter((_, i, a) => i === 0 || i === a.length - 1).map((w) => w[0]).join("");
const frame = "aspect-[4/5] w-full rounded-3xl border-2 border-ink shadow-[10px_10px_0_var(--hi)]";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid items-start gap-12 md:grid-cols-[260px_1fr]">
        <figure className="m-0 max-w-[260px]">
          {profile.photo ? (
            <Image src={profile.photo} alt={`Portrait of ${profile.name}`} width={520} height={650} className={`${frame} object-cover`} />
          ) : (
            <div role="img" aria-label="Profile photo placeholder" className={`${frame} grid place-items-center bg-gradient-to-br from-[#4332D9] to-[#7B5CFF] font-display text-7xl font-extrabold text-white`}>{initials}</div>
          )}
        </figure>
        <div>
          <p className="mb-4 text-muted">{profile.bio[0]}</p>
          <p>{profile.bio[1]}</p>
          <ul aria-label="Tools" className="mt-4 flex list-none flex-wrap gap-2 p-0">
            {profile.tools.map((t) => <li key={t} className="rounded-full border border-line bg-surface px-3.5 py-1.5">{t}</li>)}
          </ul>
          <p className="mt-5"><a href={profile.resumeHref} className="btn">Request my resume</a></p>
        </div>
      </div>
    </Section>
  );
}
