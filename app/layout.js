import "./globals.css";

export const metadata = {
  title: "Soneto da Felicidade",
  description: "Uma leitura delicada do Soneto da Felicidade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
