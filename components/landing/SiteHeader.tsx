import { Leaf } from "lucide-react";
import { ArrowIcon } from "./ArrowIcon";

const navItems = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="EnergiaFacil inicio">
        <span className="brand-mark" aria-hidden="true">
          <Leaf size={18} strokeWidth={2.4} />
        </span>
        <span>
          <strong>EnergiaFacil</strong>
          <small>Tu energia, en buenas manos</small>
        </span>
      </a>
      <nav aria-label="Navegacion principal">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="button button-small" href="#contacto">
        Consulta gratuita <ArrowIcon />
      </a>
    </header>
  );
}
