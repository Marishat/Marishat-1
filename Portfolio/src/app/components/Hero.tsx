"use client";

import { EMAIL, PHONE, PALETTE, CV_PATH, CV_DOWNLOAD_NAME } from "@/lib/data";

export default function Hero() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="hero">
      <span className="float-cap fc1" aria-hidden />
      <span className="float-cap fc2" aria-hidden />
      <span className="float-cap fc3" aria-hidden />

      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow rise d1">
            <span className="dot" /> Open to QA · Research · Teaching roles
          </span>
          <h1 className="rise d2">
            Hello, I&apos;m <span className="accent">Marishat Tasmim</span> — I make software{" "}
            <span className="underline">trustworthy</span>.
          </h1>
          <p className="lede rise d3">
            Computer Science &amp; Engineering graduate from AIUB, working at the meeting point of
            <strong> software quality assurance</strong> and <strong>explainable AI research</strong>.
            I design careful test cases by day and publish on Vision Transformers by heart.
          </p>
          <div className="hero-ctas rise d4">
            <a className="cv-btn" href={CV_PATH} download={CV_DOWNLOAD_NAME}>
              ↓ Download my CV
            </a>
            <button className="ghost-btn" onClick={() => go("#contact")}>
              ✉️ Email me
            </button>
          </div>
          <div className="hero-meta rise d5">
            <span>📍 Uttara, Dhaka</span>
            <a href={`mailto:${EMAIL}`}>✉️ {EMAIL}</a>
            <span>📞 {PHONE}</span>
          </div>
        </div>

        {/* signature capsule portrait */}
        <div className="portrait-stage rise d3">
          <div className="cap-echo two" />
          <div className="cap-echo one" />
          <div className="badge-float bf1">🎓 CGPA 3.73</div>
          <div className="badge-float bf2">📄 Published researcher</div>
          <div className="capsule">
            {/* Drop your photo at public/profile.jpg — it fills this capsule automatically */}
            <img
              src="/profile.jpg"
              alt="Portrait of Marishat Tasmim"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="ph" aria-hidden style={{ zIndex: -1, position: "absolute" }}>
              ✿ Your photo here
              <small>save it as /public/profile.jpg</small>
            </div>
          </div>
          <div className="chip-strip" title="My palette">
            {PALETTE.map((c) => (
              <i key={c} style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
