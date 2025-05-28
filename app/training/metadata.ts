import { siteConfig } from "@/lib/utils"

export const metadata = {
  title: `Internship Program | ${siteConfig.name}`,
  description: "Join our internship program to gain hands-on experience in accounting, tax, and financial services.",
  keywords: [
    ...siteConfig.keywords,
    "accounting internship",
    "financial services internship",
    "Somalia internship program",
    "accounting student opportunities",
    "finance career start",
  ],
  openGraph: {
    title: `Internship Program | ${siteConfig.name}`,
    description: "Join our internship program to gain hands-on experience in accounting, tax, and financial services.",
    url: `${siteConfig.url}/internship`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Primo Fiscal Partners Internship Program",
      },
    ],
  },
}
