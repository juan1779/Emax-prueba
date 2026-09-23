import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EnergíaFácil | Ahorra en tu factura de luz y gas',
  description:
    'Asesoramiento energético para hogares y negocios. Analizamos tu consumo y buscamos oportunidades de ahorro.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
