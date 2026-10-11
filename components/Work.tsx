"use client";
import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { projects } from "@/lib/content";

const filters = [["all", "All"], ["mobile", "Mobile"], ["web", "Web"]] as const;

export default function Work() {
  const [f, setF] = useState<string>("all");
  return (
    <Section id="work" title="Selected work" sub="Three recent projects. Open one to read the full case study.">
      <div role="group" aria-label="Filter projects" className="mb-6 flex flex-wrap gap-2">
        {filters.map(([v, label]) => (
          <button key={v} type="button" aria-pressed={f === v} onClick={() => setF(v)}
            className={`rounded-full border px-4 py-2 font-medium ${f === v ? "border-accent bg-accent text-onaccent" : "border-line bg-surface text-ink"}`}>{label}</button>
        ))}
      </div>
      {projects.filter((p) => f === "all" || p.type === f).map((p) => (
        <details key={p.id} className="proj group mb-5 overflow-hidden rounded-[20px] border border-line bg-surface">
          <summary className="grid cursor-pointer items-center gap-7 p-5 group-open:border-b group-open:border-line sm:grid-cols-[200px_1fr]">
            <div role="img" aria-label={`${p.title} preview`} className={`h-[140px] rounded-xl bg-gradient-to-br ${p.gradient}`} />
            <div>
              <h3 className="mb-1.5 font-display text-[1.6rem] font-bold leading-tight">{p.title}</h3>
              <p className="text-[.95rem] text-muted">{p.meta}</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => <span key={t} className="rounded-full border border-line px-2.5 py-0.5 text-sm text-muted">{t}</span>)}
              </div>
            </div>
          </summary>
          <div className="grid gap-x-10 gap-y-6 px-5 pb-7 pt-6 sm:grid-cols-2">
            {([["Problem", p.problem], ["Role and tools", p.role], ["Constraints", p.constraints], ["Process", p.process]] as const).map(([h, t]) => (
              <div key={h}><h4 className="font-display font-bold">{h}</h4><p className="text-muted">{t}</p></div>
            ))}
            <div className="sm:col-span-2"><h4 className="font-display font-bold">Impact</h4><p className="text-muted">{p.impact}</p></div>
            {p.prototype && (
              <div className="sm:col-span-2">
                <a href={p.prototype} target="_blank" rel="noopener noreferrer" className="btn btn-p">
                  View prototype<span className="sr-only"> (opens in a new tab)</span>
                </a>
          </div>
            )}
            <div className="sm:col-span-2"><h4 className="font-display font-bold">Next steps</h4><p className="text-muted">{p.next}</p></div>
          </div>
        </details>
      ))}
    </Section>
  );
}

