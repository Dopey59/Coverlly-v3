import type { Metadata } from "next";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

export const metadata: Metadata = {
  title: "Coverlly - Housse de protection pc portable",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
