import {
  BenefitsSection,
  ContactSection,
  HeroSection,
  ProcessSection,
  ProblemSection,
  SiteFooter,
  SiteHeader,
  SolutionSection,
  TestimonialsSection,
} from "../components/landing";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <ProcessSection />
        <ContactSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  );
}
