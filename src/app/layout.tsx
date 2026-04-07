import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Хуримын Урилга | И.Батмягмар & З.Уранбилэг",
  description:
    "Номын хуудас нээгдэн гарч ирэх анимацтай, романтик загвартай хуримын урилгын Next.js веб.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
