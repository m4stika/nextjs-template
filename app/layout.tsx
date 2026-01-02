import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import QueryProviders from "@/components/query-client-provider"

const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const archivo = localFont({
  src: "../public/fonts/Archivo-Regular.woff",
  variable: "--font-archivo-sans",
  weight: "100 400 600 900",
});
const poppinsSans = localFont({
  src: "../public/fonts/Poppins-Regular.woff",
  variable: "--font-poppins-sans",
  weight: "200 400 600 900",
});
const loraSerif = localFont({
  src: "../public/fonts/Lora-Regular.woff",
  variable: "--font-lora-serif",
  weight: "200 400 600 900",
});
const poppinsSemi = localFont({
  src: "../public/fonts/Poppins-SemiBold.woff",
  variable: "--font-poppins-semi",
  weight: "400 600 900",
});

// const { publicRuntimeConfig } = getConfig();
export const metadata: Metadata = {
  title: {
    default: `${process.env.APP_TITLE ?? process.env.NEXT_PUBLIC_TITLE}`,
    template: `%s - ${process.env.APP_TITLE ?? process.env.NEXT_PUBLIC_TITLE}`,
  },
  description: `${process.env.APP_DESCRIPTION ?? process.env.NEXT_PUBLIC_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsSans.variable} ${poppinsSemi.variable} ${archivo.variable} ${loraSerif.variable} ${geistMono.variable}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProviders>
            {children}
          </QueryProviders>
        </ThemeProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
