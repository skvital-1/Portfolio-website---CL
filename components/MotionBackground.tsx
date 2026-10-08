// Decorative, CSS-only animation. No client JS. Hidden from screen readers and
// switched off for visitors who prefer reduced motion (see globals.css).
export default function MotionBackground() {
  return (
    <div aria-hidden="true" className="motion-bg pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="mb-grid" />
      <svg className="mb-curve" viewBox="0 0 800 400" fill="none" preserveAspectRatio="xMidYMid slice">
        {/* pen-tool handles */}
        <line className="mb-handle" x1="40" y1="320" x2="200" y2="40" />
        <line className="mb-handle" x1="380" y1="360" x2="560" y2="120" />
        <path className="mb-path" d="M40 320 C 200 40, 380 360, 560 120 S 760 200, 780 60" />
        {[[40, 320], [560, 120], [780, 60]].map(([x, y]) => (
          <rect key={x} className="mb-anchor" x={x - 6} y={y - 6} width="12" height="12" rx="2" />
        ))}
        {[[200, 40], [380, 360]].map(([x, y]) => <circle key={x} className="mb-anchor" cx={x} cy={y} r="5" />)}
      </svg>
      <div className="mb-card mb-c1" />
      <div className="mb-card mb-c2" />
      <div className="mb-btn" />
      <div className="mb-select"><i /><i /><i /><i /></div>
      <svg className="mb-cursor" width="26" height="26" viewBox="0 0 24 24">
        <path d="M4 2l16 9-7 2-3 7z" fill="var(--ink)" stroke="var(--bg)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
