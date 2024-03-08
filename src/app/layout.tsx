import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./../styles/globals.css";
import ReactQueryProvider from "@/provider/ReactQueryProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Pokemon Card",
  description: "공학도서관 미니과제 구현",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
