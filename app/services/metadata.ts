import { siteConfig } from "@/lib/utils"

export const metadata = {
  title: `Services | ${siteConfig.name}`,
  description: "Explore our comprehensive accounting, tax, advisory, and digital services for businesses of all sizes.",
  keywords: [
    ...siteConfig.keywords,
    "accounting services Somalia",
    "tax planning East Africa",
    "business advisory services",
    "financial consulting",
    "digital accounting solutions",
  ],
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description:
      "Explore our comprehensive accounting, tax, advisory, and digital services for businesses of all sizes.",
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Primo Fiscal Partners Services",
      },
    ],
  },
}
