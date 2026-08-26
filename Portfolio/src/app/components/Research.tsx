import SectionHeader from "./SectionHeader";
import { P, RESEARCH } from "@/lib/data";

export default function Research() {
  return (
    <section id="research">
      <div className="wrap reveal">
        <SectionHeader eyebrow="Peer-reviewed" chipColor={P.forest}>
          Published <em>research</em>
        </SectionHeader>

        <div className="paper">
          <span className="label">{RESEARCH.journal}</span>
          <h3>{RESEARCH.title}</h3>
          <p>{RESEARCH.summary}</p>
          <div className="kw">
            {RESEARCH.keywords.map((k) => (
              <span key={k}>{k}</span>
            ))}
          </div>
          <a className="doi" href={RESEARCH.doi} target="_blank" rel="noreferrer">
            Read the paper · DOI ↗
          </a>
        </div>
      </div>
    </section>
  );
}
