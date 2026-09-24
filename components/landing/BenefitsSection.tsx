import { benefits } from "./data";

export function BenefitsSection() {
  return (
    <section
      className="benefits section"
      id="beneficios"
      aria-labelledby="benefits-title"
    >
      <div className="section-heading">
        <span className="eyebrow coral">TUS BENEFICIOS</span>
        <h2 id="benefits-title">Ahorra mas, vive mejor</h2>
        <p>
          Con nuestro asesoramiento energetico no solo reduces tu factura,
          tambien ganas tranquilidad y control sobre tu consumo.
        </p>
      </div>
      <div className="benefit-grid">
        {benefits.map(({ icon: Icon, title, text }) => (
          <article className="benefit" key={title}>
            <span className="benefit-icon" aria-hidden="true">
              <Icon size={20} strokeWidth={2.2} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
