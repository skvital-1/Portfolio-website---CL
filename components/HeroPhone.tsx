"use client";
import { useState } from "react";

export default function HeroPhone() {
  const [final, setFinal] = useState(false);
  return (
    <div>
      <div className="phone mx-auto w-[260px] rounded-[36px] border-2 border-ink bg-surface p-3.5" data-final={final} aria-hidden="true">
        <div className="screen flex min-h-[360px] flex-col gap-3 rounded-3xl p-[18px]">
          <div className="bar h-3.5 w-3/5" />
          <div className="bar h-3.5 w-[35%]" />
          <div className="card h-24" />
          <div className="card h-16" />
          <div className="pill mt-auto grid h-11 place-items-center text-sm font-semibold text-transparent">Send money</div>
        </div>
      </div>
      <div role="group" aria-label="Design stage" className="mt-3.5 flex justify-center gap-1.5">
        {[["Wireframe", false], ["Final UI", true]].map(([label, v]) => (
          <button key={String(label)} type="button" aria-pressed={final === v} onClick={() => setFinal(v as boolean)}
            className={`rounded-full border-2 px-3.5 py-1.5 text-sm font-semibold ${final === v ? "border-ink bg-ink text-bg" : "border-line text-muted"}`}>
            {label as string}
          </button>
        ))}
      </div>
    </div>
  );
}
