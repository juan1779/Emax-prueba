import Image from "next/image";
import { trustPoints } from "./data";
import { ArrowIcon } from "./ArrowIcon";

export function HeroSection() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <Image
        src="/hero-banner.webp"
        alt="Casa con bombilla encendida y alcancia para ahorro energetico"
        fill
        priority
        className="hero-image"
        sizes="100vw"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-copy">
        <span className="eyebrow">ASESORAMIENTO ENERGETICO</span>
        <h1 id="hero-title">
          Reduce tu factura de luz y gas hasta un <em>40%</em>
        </h1>
        <p>
          Analizamos tu consumo, comparamos las mejores tarifas y te ayudamos a
          pagar menos, sin complicaciones.
        </p>
        <a className="button" href="#contacto">
          Solicita tu consulta gratuita <ArrowIcon />
        </a>
        <ul className="trust-row" aria-label="Puntos clave del servicio">
          {trustPoints.map(({ icon: Icon, text }) => (
            <li key={text}>
              <Icon size={14} strokeWidth={2.6} aria-hidden="true" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="hero-note" aria-hidden="true">
        Mas ahorro,
        <br />
        mas tranquilidad
      </p>
    </section>
  );
}
