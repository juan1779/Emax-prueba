"use client";

import { FormEvent, useState } from "react";
import { LockKeyhole, Mail, PhoneCall, UserRound } from "lucide-react";
import Image from "next/image";
import { ArrowIcon } from "./ArrowIcon";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section
      className="contact section"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <Image
        src="/ChatGPT Image 23 sept 2026, 22_31_49.webp"
        alt="Parque eolico al atardecer"
        fill
        className="contact-background-image"
        sizes="100vw"
      />
      <div className="contact-background-overlay" aria-hidden="true" />
      <div className="contact-promo">
        <span className="eyebrow light">SOLICITA TU CONSULTA GRATUITA</span>
        <h2 id="contact-title">Empieza a ahorrar hoy mismo</h2>
        <p>
          Rellena el formulario y uno de nuestros asesores se pondra en contacto
          contigo en menos de 24 horas.
        </p>
        <ul className="contact-points" aria-label="Condiciones de la consulta">
          <li>100% gratuito</li>
          <li>Sin compromiso</li>
          <li>Atencion personalizada</li>
        </ul>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Cuentanos sobre ti</h3>

        <label htmlFor="name">
          Nombre *
          <span className="field-wrap">
            <UserRound size={16} aria-hidden="true" />
            <input
              id="name"
              required
              name="name"
              placeholder="Tu nombre"
              autoComplete="name"
            />
          </span>
        </label>

        <label htmlFor="phone">
          Telefono *
          <span className="field-wrap">
            <PhoneCall size={16} aria-hidden="true" />
            <input
              id="phone"
              required
              name="phone"
              type="tel"
              placeholder="Tu telefono"
              autoComplete="tel"
            />
          </span>
        </label>

        <label htmlFor="email">
          Email *
          <span className="field-wrap">
            <Mail size={16} aria-hidden="true" />
            <input
              id="email"
              required
              name="email"
              type="email"
              placeholder="tu@email.com"
              autoComplete="email"
            />
          </span>
        </label>

        <label htmlFor="type">
          Tipo de cliente *
          <select id="type" required name="type" defaultValue="">
            <option value="" disabled>
              Selecciona una opcion
            </option>
            <option>Particular</option>
            <option>Empresa / negocio</option>
            <option>Comunidad</option>
          </select>
        </label>

        <label htmlFor="message">
          Mensaje
          <textarea
            id="message"
            name="message"
            placeholder="Cuentanos brevemente que necesitas..."
          />
        </label>

        <button className="button form-button" type="submit" aria-live="polite">
          {sent ? "Solicitud enviada" : "Enviar solicitud"} <ArrowIcon />
        </button>

        <small className="privacy-note">
          <LockKeyhole size={14} aria-hidden="true" /> Tus datos estan seguros.
          No compartimos tu informacion.
        </small>
      </form>
    </section>
  );
}
