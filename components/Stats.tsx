import Section from "./Section";
import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <Section title="Results so far" sub="">
      <dl className="grid gap-5 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-line bg-surface p-[22px]">
            <dt className="font-display text-[2.6rem] font-extrabold leading-none text-accent">{s.value}</dt>
            <dd className="mt-2 text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
