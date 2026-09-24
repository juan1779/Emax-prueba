import {
  BadgeCheck,
  Clock3,
  Coins,
  Handshake,
  Leaf,
  Lightbulb,
  ReceiptText,
  Search,
  ShieldCheck,
} from "lucide-react";
import { BenefitItem, StepItem, TestimonialItem } from "./types";

export const benefits: BenefitItem[] = [
  {
    icon: Coins,
    title: "Ahorro real en tu factura",
    text: "Hasta un 40% menos en luz y gas.",
  },
  {
    icon: ShieldCheck,
    title: "Sin permanencia",
    text: "Tu decides, sin ataduras.",
  },
  {
    icon: Clock3,
    title: "Ahorro de tiempo",
    text: "Nosotros nos encargamos de todo.",
  },
  {
    icon: Leaf,
    title: "Energia mas sostenible",
    text: "Cuida el planeta mientras ahorras.",
  },
  {
    icon: Handshake,
    title: "Asesoramiento personalizado",
    text: "Para hogares y negocios.",
  },
];

export const steps: StepItem[] = [
  {
    number: "01",
    title: "Analizamos tu caso",
    text: "Nos cuentas tus necesidades y revisamos tu situacion actual.",
    icon: Search,
  },
  {
    number: "02",
    title: "Revisamos tu factura",
    text: "Comparamos tarifas y detectamos oportunidades de ahorro.",
    icon: ReceiptText,
  },
  {
    number: "03",
    title: "Proponemos una solucion",
    text: "Te presentamos la mejor opcion, sin compromiso y con total transparencia.",
    icon: Lightbulb,
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Gracias a EnergiaFacil he conseguido reducir mi factura de la luz un 32%. El proceso fue rapido y muy sencillo.",
    name: "Laura Martinez",
    city: "Madrid",
  },
  {
    quote:
      "Me ayudaron a encontrar una tarifa mucho mejor y sin permanencia. Muy profesionales y atentos.",
    name: "Carlos Ruiz",
    city: "Barcelona",
  },
  {
    quote:
      "Excelente servicio. En menos de 48h tenia mi nueva tarifa y ya note la diferencia en mi factura.",
    name: "Ana Gomez",
    city: "Valencia",
  },
];

export const trustPoints = [
  {
    icon: BadgeCheck,
    text: "Sin compromiso",
  },
  {
    icon: Clock3,
    text: "Respuesta en 24-48h",
  },
  {
    icon: Handshake,
    text: "Expertos en energia",
  },
];
