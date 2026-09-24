import { Leaf } from "lucide-react";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="brand-mark" aria-hidden="true">
          <Leaf size={18} strokeWidth={2.4} />
        </span>
        <div>
          <strong>EnergiaFacil</strong>
          <small>Tu energia, en buenas manos</small>
        </div>
      </div>

      <nav aria-label="Enlaces del sitio">
        <h4>Enlaces</h4>
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div>
        <h4>Informacion legal</h4>
        <a href="#">Aviso legal</a>
        <a href="#">Politica de privacidad</a>
        <a href="#">Politica de cookies</a>
      </div>

      <div>
        <h4>Siguenos</h4>
        <div className="socials">
          <a href="#" aria-label="Facebook">
            f
          </a>
          <a href="#" aria-label="Instagram">
            ◉
          </a>
          <a href="#" aria-label="LinkedIn">
            in
          </a>
          <a href="#" aria-label="Youtube">
            ▶
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 EnergiaFacil. Todos los derechos reservados.</span>
        <span>Ahorrar hoy. Cuidar el manana.</span>
      </div>
    </footer>
  );
}
