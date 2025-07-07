import { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "/fonts/PretendardVariable.woff2",
  display: "swap",
  preload: true,
  weight: "100 900",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='ko'
      className={pretendard.className}
    >
      <body>{children}</body>
    </html>
  );
}
