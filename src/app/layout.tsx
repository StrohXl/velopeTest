import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
import Layout from "@/components/layout";
import QueryContext from "@/components/contexts/QueryContext";
import ProviderStore from "./store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderStore>
          <QueryContext>
            <Layout>{children}</Layout>
          </QueryContext>
        </ProviderStore>
      </body>
    </html>
  );
}
