import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Pulse Habit",
  description: "Track your Daily Habits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen w-full flex-col">
              <Header />
              <div className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
                {children}
              </div>
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
