import type { Metadata } from "next";
import "./globals.css";

const schema = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "name": "Complete Electrical Service",
  "telephone": "+61262515444",
  "url": "https://completeelectrical.com.au",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit 4/16 Grimwade St",
    "addressLocality": "Mitchell",
    "addressRegion": "ACT",
    "postalCode": "2911",
    "addressCountry": "AU"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Canberra, ACT & surrounding regions"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "600"
  }
};

export const metadata: Metadata = {
  title: "Complete Electrical Service | Canberra Electricians | ACT & NSW Licensed",
  description: "Canberra's trusted electrical contractor. Residential & commercial, 24/7 emergency callout, $0 call-out fee on proceeding jobs. 600+ Google reviews, 4.8★ average. ACT Lic 20231100 · NSW Lic 78757C.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
