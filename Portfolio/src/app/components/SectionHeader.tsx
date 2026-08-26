import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  chipColor: string;
  chipBorder?: boolean;
  children: ReactNode; // the <h2> content
};

export default function SectionHeader({ eyebrow, chipColor, chipBorder, children }: Props) {
  return (
    <div className="sec-head">
      <span className="sec-label">
        <i
          style={{
            background: chipColor,
            border: chipBorder ? "1px solid var(--sage)" : undefined,
          }}
        />{" "}
        {eyebrow}
      </span>
      <h2>{children}</h2>
    </div>
  );
}
