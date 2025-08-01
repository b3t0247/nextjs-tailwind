import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import LanguageSwitcher from "@/components/ui/language-switcher";
import { ModeToggle } from "@/components/theme-toggle";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <header className="flex justify-end p-4">
        {/* <LanguageSwitcher /> */}
        <ModeToggle />
      </header>
      {children}
    </ThemeProvider>
  );
}
