
import type { Metadata } from "next";
import "vazirmatn/Vazirmatn-font-face.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "شیرین‌خانه | هنر شیرینی‌های ایرانی",
  description:
    "سفری سه‌بعدی به دنیای شیرینی‌های اصیل ایرانی؛ از مواد اولیه تا طعم نهایی.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
