import { LucideIcon } from "lucide-react";

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface StepItem {
  number: string;
  title: string;
  text: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  city: string;
}
