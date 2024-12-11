import "./globals.css";
import { Quicksand } from "next/font/google";
import { ThemeProvider } from "@/app/components/theme-provider";
import Header from "@/app/components/header";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Women's Community Platform",
  description:
    "The world's largest women's community for chatting, sharing, and collaborating.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={quicksand.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
