import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="/noflash.js" />
      </head>
      <body className={`${jakarta.className} min-h-screen`}>{children}</body>
    </html>
  );
}
