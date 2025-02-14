import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
