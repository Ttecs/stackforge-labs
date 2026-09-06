import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

const url = "https://stackforge-labs.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: `${site.name} — Custom .NET & React Software Studio`,
  description: site.intro,
  keywords: [
    "StackForge Labs", ".NET developer", "React developer", "Next.js",
    "Angular", "Azure", "custom web applications", "software studio",
    "ASP.NET Core", "full stack developer",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: `${site.name} — Custom .NET & React Software Studio`,
    description: site.intro,
    siteName: site.name,
    images: [{ url: "/logo.png", width: 1254, height: 1254, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: `${site.name} — Custom .NET & React Software Studio`,
    description: site.intro,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
