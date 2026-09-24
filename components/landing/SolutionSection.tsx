import { Zap } from "lucide-react";
import Image from "next/image";
import { ArrowIcon } from "./ArrowIcon";

export function SolutionSection() {
  return (
    <section className="solution section" aria-labelledby="solution-title">
      <div className="solution-visual" aria-hidden="true">
        <Image
          src="/help.webp"
          alt="Bombilla con planta y monedas"
          fill
          className="photo-cover"
          sizes="(max-width: 980px) 100vw, 40vw"
        />
        <div className="solution-badge">
          <Zap size={22} strokeWidth={2.4} />
        </div>
      </div>
      <div className="solution-copy">
        <span className="eyebrow">NUESTRA SOLUCION</span>
        <h2 id="solution-title">
          Hacemos una revision energetica de tu hogar o negocio
        </h2>
        <p>
          Analizamos tus habitos de consumo, revisamos tus facturas y comparamos
          las mejores tarifas del mercado para encontrar la opcion que mas te
          conviene.
        </p>
        <a className="button button-green" href="#contacto">
          Empieza ahora <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
