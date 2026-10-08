import HeroPhone from "./HeroPhone";
import MotionBackground from "./MotionBackground";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
    <MotionBackground />
    <div id="top" className="wrap grid items-center gap-12 py-12 pb-14 md:grid-cols-[1.25fr_.75fr] md:py-[72px] md:pb-[88px]">
      <div>
        <h1 className="font-display text-[clamp(2.6rem,6.6vw,5.2rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
          I design apps people <mark className="rounded-[.12em] bg-hi px-[.12em] text-onhi">finish using</mark>.
        </h1>
        <p className="my-6 mb-8 max-w-[34em] text-xl text-muted">{profile.lead}</p>
        <div className="flex flex-wrap gap-3">
          <a href="#work" className="btn btn-p">See my work</a>
          <a href="#contact" className="btn">Email me</a>
        </div>
      </div>
      <HeroPhone />
    </div>
    </div>
  );
}
