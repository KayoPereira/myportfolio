import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kayo Pereira - Desenvolvedor Full Stack & Professor Ruby",
  description: "Desenvolvedor de Software e Professor de Programação Ruby com mais de 5 anos de experiência. Especialista em Ruby on Rails, React, e arquitetura de software.",
  keywords: ["Desenvolvedor", "Ruby on Rails", "React", "Full Stack", "Professor", "Recife"],
  authors: [{ name: "Kayo Pereira" }],
  creator: "Kayo Pereira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kayopereira.dev",
    title: "Kayo Pereira - Desenvolvedor Full Stack & Professor Ruby",
    description: "Desenvolvedor de Software e Professor de Programação Ruby com mais de 5 anos de experiência.",
    siteName: "Kayo Pereira Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayo Pereira - Desenvolvedor Full Stack & Professor Ruby",
    description: "Desenvolvedor de Software e Professor de Programação Ruby com mais de 5 anos de experiência.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
