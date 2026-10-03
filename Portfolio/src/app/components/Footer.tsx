import { P } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="mini-chips">
        {[P.sky, P.mint, P.cream, P.blush, P.sage].map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
      </div>
      Designed by © {new Date().getFullYear()} <b>Marishat Tasmim And Shihab</b>
    </footer>
  );
}
