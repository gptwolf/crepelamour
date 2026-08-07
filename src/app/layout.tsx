import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Crepe L'Amour — Mobile Crêpe Catering | Southern California",
  description:
    "Made-to-order crepes and mini buttermilk pancakes from a custom cart. Sweet & savory crepe bar catering for weddings, baby showers, birthdays, and brand events across SoCal.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Crepe L'Amour — Mobile Crêpe Catering",
    description:
      "Made-to-order crepes & mini buttermilk pancakes for your event. Southern California cart catering.",
    type: "website",
    images: [{ url: "/logo/logo.png", width: 1024, height: 1024, alt: "Crepe L'Amour" }],
  },
  twitter: {
    card: "summary",
    title: "Crepe L'Amour",
    description: "Mobile crêpe catering for events across Southern California.",
    images: ["/logo/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
