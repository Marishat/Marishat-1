import SectionHeader from "./SectionHeader";
import { P, EDUCATION } from "@/lib/data";

export default function About() {
  return (
    <section id="about">
      <div className="wrap reveal">
        <SectionHeader eyebrow="Get to know me" chipColor={P.sky}>
          A little <em>about me</em>
        </SectionHeader>

        <div className="about-grid">
          <div>
            <p>
              I&apos;m a motivated CSE graduate from American International University–Bangladesh with strong
              communication, organizational, analytical and problem-solving skills. Through my internship, academic
              projects and research, I&apos;ve learned that{" "}
              <span className="hl">quality isn&apos;t a final step — it&apos;s a mindset</span> you bring to every
              requirement, every test case and every line of documentation.
            </p>
            <p>
              My research lives in{" "}
              <strong>Computer Vision, Deep Learning, Vision Transformers, CNNs and Explainable AI</strong> —
              including a published study on brain tumor MRI classification using Real-ESRGAN super-resolution and
              LIME explanations. I&apos;m adaptable, self-driven, and passionate about teaching, student mentorship
              and emerging AI technologies — eager to contribute to CSE education and research by combining academic
              knowledge with practical industry experience.
            </p>
          </div>

          <div className="card edu-card">
            <h3>🎓 Education</h3>
            {EDUCATION.map((e) => (
              <div className="edu-item" key={e.degree}>
                <strong>{e.degree}</strong>
                <span>{e.school}</span>
                <br />
                <span className="gpa">{e.gpa}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
