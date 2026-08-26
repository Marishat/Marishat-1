import SectionHeader from "./SectionHeader";
import { P, PROJECTS } from "@/lib/data";
import type { CSSProperties } from "react";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap reveal">
        <SectionHeader eyebrow="Selected work" chipColor={P.sage}>
          Projects I&apos;ve <em>tested &amp; built</em>
        </SectionHeader>

        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="card proj-card"
              style={{ "--bar": p.color } as CSSProperties}
            >
              <span className="proj-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="proj-foot">
                <span className="pass">✓ all tests passed</span>
                {p.link && (
                  <a className="repo" href={p.link} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
