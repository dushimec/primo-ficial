import { siteConfig } from "@/lib/utils"

export const metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: "Learn about Primo Fiscal Partners, our history, mission, values, and leadership team.",
  keywords: [
    ...siteConfig.keywords,
    "financial services company",
    "accounting firm history",
    "financial leadership team",
    "Somalia financial experts",
    "East Africa accounting firm",
  ],
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: "Learn about Primo Fiscal Partners, our history, mission, values, and leadership team.",
    url: `${siteConfig.url}/about-us`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Primo Fiscal Partners",
      },
    ],
  },
}
