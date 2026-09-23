'use client';

import { FormEvent, useState } from 'react';

const benefits = [
  { icon: '€', title: 'Ahorro real', text: 'Detectamos oportunidades para reducir tu factura.' },
  { icon: '✓', title: 'Sin permanencia', text: 'Tú decides qué hacer después del análisis.' },
  { icon: '◷', title: 'Ahorro de tiempo', text: 'Nos encargamos de revisar opciones por ti.' },
  { icon: '↯', title: 'Consumo eficiente', text: 'Mejor información para consumir con criterio.' },
  { icon: '◯', title: 'Asesoramiento', text: 'Una revisión adaptada a tu hogar o negocio.' },
];

const steps = [
  ['01', 'Analizamos tu caso', 'Nos cuentas tus necesidades y revisamos tu situación actual.'],
  ['02', 'Revisamos tu factura', 'Comparamos tarifas y detectamos oportunidades de ahorro.'],
  ['03', 'Proponemos una solución', 'Te presentamos opciones claras, sin compromiso y con transparencia.'],
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function Home() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="EnergíaFácil inicio">
          <span className="brand-mark">✦</span>
          <span>
            <strong>EnergíaFácil</strong>
            <small>Tu energía, en buenas manos</small>
          </span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="button button-small" href="#contacto">Consulta gratuita <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow">ASESORAMIENTO ENERGÉTICO</span>
          <h1>Reduce tu factura de <em>luz y gas</em> sin complicaciones.</h1>
          <p>Analizamos tu consumo, revisamos tu factura y te ayudamos a encontrar una opción que se adapte mejor a ti.</p>
          <a className="button" href="#contacto">Solicita tu consulta gratuita <Arrow /></a>
          <div className="trust-row">
            <span><b>✓</b> Sin compromiso</span>
            <span><b>◷</b> Respuesta en 24–48h</span>
            <span><b>♧</b> Asesoramiento personalizado</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Ilustración de ahorro energético" role="img">
          <div className="sun"></div><div className="house"><i></i><i></i><i></i><i></i></div><div className="bulb">◐</div><div className="coin">€</div>
          <div className="hero-note">Más ahorro,<br />más tranquilidad ↘</div>
        </div>
      </section>

      <section className="problem section">
        <div>
          <span className="eyebrow coral">EL PROBLEMA</span>
          <h2>¿Sientes que pagas demasiado por la luz y el gas?</h2>
          <p>Las tarifas cambian constantemente, los precios suben y muchas veces pagamos de más sin darnos cuenta.</p>
          <ul className="check-list negative">
            <li>Tarifas poco competitivas</li><li>Consumos mal ajustados</li><li>Recibos más altos de lo esperado</li><li>Falta de información y asesoramiento</li>
          </ul>
        </div>
        <div className="photo-card problem-photo"><div className="person person-a"></div><div className="person person-b"></div><div className="paper"></div><div className="problem-caption">“¿Por qué ha subido tanto este mes?”</div></div>
      </section>

      <section className="solution section">
        <div className="solution-visual"><div className="leaf">⌁</div><div className="bulb-large">◉</div><div className="coins">€ € €</div></div>
        <div className="solution-copy">
          <span className="eyebrow">NUESTRA SOLUCIÓN</span>
          <h2>Hacemos una revisión energética de tu hogar o negocio</h2>
          <p>Analizamos tus hábitos de consumo, revisamos tus facturas y comparamos alternativas del mercado para encontrar oportunidades de mejora.</p>
          <a className="button button-green" href="#contacto">Empieza ahora <Arrow /></a>
        </div>
      </section>

      <section className="benefits section" id="beneficios">
        <div className="section-heading"><span className="eyebrow coral">TUS BENEFICIOS</span><h2>Ahorra más, vive mejor</h2><p>Una revisión clara para tomar decisiones con más información y menos preocupaciones.</p></div>
        <div className="benefit-grid">{benefits.map((benefit) => <article className="benefit" key={benefit.title}><span className="benefit-icon">{benefit.icon}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
      </section>

      <section className="process section" id="como-funciona">
        <div className="section-heading left"><span className="eyebrow">CÓMO FUNCIONA</span><h2>Es fácil, rápido y sin compromiso</h2></div>
        <div className="steps">{steps.map(([number, title, text], index) => <article className="step" key={number}><div className="step-number">{number}</div><div className="step-icon">{index === 0 ? '⌕' : index === 1 ? '▤' : '◉'}</div><h3>{title}</h3><p>{text}</p>{index < 2 && <span className="step-arrow">→</span>}</article>)}</div>
      </section>

      <section className="contact section" id="contacto">
        <div className="contact-promo"><span className="eyebrow light">SOLICITA TU CONSULTA GRATUITA</span><h2>Empieza a ahorrar hoy mismo</h2><p>Déjanos tus datos y uno de nuestros asesores se pondrá en contacto contigo para conocer tu caso.</p><div className="contact-points"><span>✓ 100% gratuito</span><span>✓ Sin compromiso</span><span>✓ Atención personalizada</span></div></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Cuéntanos sobre ti</h3>
          <label>Nombre *<input required name="name" placeholder="Tu nombre" /></label>
          <label>Teléfono *<input required name="phone" type="tel" placeholder="Tu teléfono" /></label>
          <label>Email *<input required name="email" type="email" placeholder="tu@email.com" /></label>
          <label>Tipo de cliente *<select required name="type" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Particular</option><option>Empresa / negocio</option><option>Comunidad</option></select></label>
          <label>Mensaje <textarea name="message" placeholder="Cuéntanos brevemente qué necesitas..."></textarea></label>
          <button className="button form-button" type="submit">{sent ? 'Solicitud enviada ✓' : 'Enviar solicitud'} <Arrow /></button>
          <small>🔒 Tus datos están seguros. No compartimos tu información.</small>
        </form>
      </section>

      <section className="testimonials section">
        <div className="section-heading"><span className="eyebrow">CONFIANZA</span><h2>Personas que ya revisaron su consumo</h2></div>
        <div className="testimonial-grid">
          {[
            ['“Nos ayudaron a entender nuestra factura y a detectar varios puntos de mejora.”', 'Laura Martínez', 'Madrid'],
            ['“El proceso fue muy sencillo y la explicación de las opciones fue clara.”', 'Carlos Ruiz', 'Barcelona'],
            ['“Recibí una respuesta rápida y pude comparar alternativas con tranquilidad.”', 'Ana Gómez', 'Valencia'],
          ].map(([quote, name, city]) => <blockquote key={name}><span className="quote-mark">“</span><p>{quote}</p><footer><span className="avatar">{name[0]}</span><span><strong>{name}</strong><small>{city}</small></span></footer></blockquote>)}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-mark">✦</span><div><strong>EnergíaFácil</strong><small>Tu energía, en buenas manos</small></div></div>
        <div><h4>Enlaces</h4><a href="#inicio">Inicio</a><a href="#como-funciona">Cómo funciona</a><a href="#beneficios">Beneficios</a><a href="#contacto">Contacto</a></div>
        <div><h4>Información legal</h4><a href="#">Aviso legal</a><a href="#">Política de privacidad</a><a href="#">Política de cookies</a></div>
        <div><h4>Síguenos</h4><div className="socials"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="LinkedIn">in</a></div></div>
        <div className="footer-bottom"><span>© 2026 EnergíaFácil. Todos los derechos reservados.</span><span>Ahorrar hoy. Cuidar el mañana.</span></div>
      </footer>
    </main>
  );
}
