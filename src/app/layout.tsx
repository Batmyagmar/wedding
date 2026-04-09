import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Хуримын урилга | И.Батмягмар & З.Уранбилэг",
  description:
    "И.Батмягмар, З.Уранбилэг нарын хуримын урилгын веб хуудас.",
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
