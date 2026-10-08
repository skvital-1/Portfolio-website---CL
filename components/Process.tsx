import Section from "./Section";
import { steps } from "@/lib/content";

export default function Process() {
  return (
    <Section id="process" title="How I work" sub="The same four steps on every project, scaled to the time available.">
      <ol className="grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t-4 border-accent pt-3.5">
            <span className="font-display text-3xl font-extrabold text-accent">{i + 1}</span>
            <h3 className="mb-1.5 mt-1 font-display text-xl font-bold">{s.title}</h3>
            <p className="text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
