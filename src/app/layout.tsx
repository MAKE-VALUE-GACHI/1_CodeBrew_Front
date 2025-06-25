import { ReactNode } from "react";
import localFont from "next/font/local";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pretendard = localFont({
    src: "/fonts/PretendardVariable.woff2",
    display: "swap",
    preload: true,
    weight: "100 900",
  });
  return (
    <html
      lang='ko'
      className={pretendard.className}
    >
      <body>{children}</body>
    </html>
  );
}
