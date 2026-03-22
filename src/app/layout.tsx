import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHORT PRO. — Dịch vụ TikTok chuyên nghiệp cho doanh nghiệp",
  description:
    "Giải pháp sản xuất & xây dựng kênh TikTok cho các chủ doanh nghiệp bận rộn. Bạn không cần tự quay, tự dựng, tự đăng. Chúng tôi lo tất cả.",
  keywords: [
    "dịch vụ TikTok",
    "xây dựng kênh TikTok",
    "sản xuất video TikTok",
    "marketing TikTok doanh nghiệp",
    "SHORT PRO",
  ],
  openGraph: {
    title: "SHORT PRO. — Dịch vụ TikTok #1 cho doanh nghiệp",
    description:
      "Giải pháp sản xuất & xây dựng kênh TikTok cho các chủ doanh nghiệp bận rộn.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
