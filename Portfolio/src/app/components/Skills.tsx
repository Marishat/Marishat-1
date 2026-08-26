import SectionHeader from "./SectionHeader";
import { P, SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap reveal">
        <SectionHeader eyebrow="What I bring" chipColor={P.cream} chipBorder>
          My <em>toolkit</em>
        </SectionHeader>

        <div className="skill-grid">
          {SKILLS.map((s) => (
            <div key={s.group} className="card skill-card">
              <h3>
                <i style={{ background: s.color }} /> {s.group}
              </h3>
              <div className="pills">
                {s.items.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// test 
