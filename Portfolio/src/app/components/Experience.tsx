import SectionHeader from "./SectionHeader";
import { P } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap reveal">
        <SectionHeader eyebrow="Professional journey" chipColor={P.blush}>
          Where I&apos;ve <em>worked</em>
        </SectionHeader>

        <div className="card xp-card">
          <div className="xp-badge">In</div>
          <div>
            <h3>Intellier Ltd</h3>
            <div className="role">Intern · Quality Assurance</div>
            <ul>
              <li>Participated in QA and debugging sessions, identifying UI inconsistencies and improving responsiveness.</li>
              <li>Performed cross-browser and device compatibility testing for React components.</li>
              <li>Documented and tracked bugs using standard issue-tracking tools.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
