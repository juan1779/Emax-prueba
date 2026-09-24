import { testimonials } from "./data";

export function TestimonialsSection() {
  return (
    <section
      className="testimonials section"
      aria-labelledby="testimonials-title"
    >
      <div className="section-heading">
        <span className="eyebrow">LO QUE DICEN NUESTROS CLIENTES</span>
        <h2 id="testimonials-title">Miles de personas ya estan ahorrando</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map(({ quote, name, city }) => (
          <blockquote key={name}>
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <p>{quote}</p>
            <footer>
              <span className="avatar" aria-hidden="true">
                {name[0]}
              </span>
              <span>
                <strong>{name}</strong>
                <small>{city}</small>
                <small className="stars">★★★★★</small>
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
