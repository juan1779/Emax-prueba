import { AlertTriangle, BadgeEuro, FileSearch, Gauge } from "lucide-react";
import Image from "next/image";

const issues = [
  {
    icon: BadgeEuro,
    text: "Tarifas poco competitivas",
  },
  {
    icon: Gauge,
    text: "Consumos mal ajustados",
  },
  {
    icon: AlertTriangle,
    text: "Recibos mas altos de lo esperado",
  },
  {
    icon: FileSearch,
    text: "Falta de informacion y asesoramiento",
  },
];

export function ProblemSection() {
  return (
    <section className="problem section" aria-labelledby="problem-title">
      <div>
        <span className="eyebrow coral">EL PROBLEMA</span>
        <h2 id="problem-title">
          Sientes que pagas demasiado por la luz y el gas?
        </h2>
        <p>
          Las tarifas cambian constantemente, los precios suben y muchas veces
          pagamos de mas sin darnos cuenta.
        </p>
        <ul className="check-list negative">
          {issues.map(({ icon: Icon, text }) => (
            <li key={text}>
              <Icon size={16} strokeWidth={2.2} aria-hidden="true" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="photo-card problem-photo" aria-hidden="true">
        <Image
          src="/users.webp"
          alt="Pareja revisando su factura energetica"
          fill
          className="photo-cover"
          sizes="(max-width: 980px) 100vw, 42vw"
        />
      </div>
    </section>
  );
}
