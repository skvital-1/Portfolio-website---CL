export default function Section({ id, title, sub, children }: { id?: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-[72px]">
      <div className="wrap">
        <h2 className="mb-3 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.02em]">{title}</h2>
        {sub && <p className="mb-8 max-w-[40em] text-muted">{sub}</p>}
        {children}
      </div>
    </section>
  );
}
