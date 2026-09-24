import { steps } from "./data";

export function ProcessSection() {
  return (
    <section
      className="process section"
      id="como-funciona"
      aria-labelledby="process-title"
    >
      <div className="section-heading left">
        <span className="eyebrow">COMO FUNCIONA</span>
        <h2 id="process-title">Es facil, rapido y sin compromiso</h2>
      </div>
      <div className="steps">
        {steps.map(({ number, title, text, icon: Icon }, index) => (
          <article className="step" key={number}>
            <div className="step-number">{number}</div>
            <div className="step-icon" aria-hidden="true">
              <Icon size={21} strokeWidth={2.2} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            {index < steps.length - 1 ? (
              <span className="step-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
