import SectionHeader from "./SectionHeader";
import { P, REFERENCES } from "@/lib/data";

export default function References() {
  return (
    <section id="references">
      <div className="wrap reveal">
        <SectionHeader eyebrow="Vouched for" chipColor={P.mint} chipBorder>
          References
        </SectionHeader>

        <div className="ref-grid">
          {REFERENCES.map((r) => (
            <div className="card ref-card" key={r.name}>
              <strong>{r.name}</strong>
              <p>{r.role}</p>
              <p>
                📧 <a href={`mailto:${r.email}`}>{r.email}</a>
                {r.phone && <> · 📞 {r.phone}</>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
