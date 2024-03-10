import type {Metadata} from "next";
import {Inter} from "next/font/google";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import localFont from "next/font/local";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Pokemon Card",
  description: "공학도서관 미니과제 구현",
};

const font = localFont({
  src: "./fonts/Pretendard-Regular.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={font.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
