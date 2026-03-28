import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIT Thandavapura | Mock Exam Portal",
  description:
    "Official KCET & PGCET Mock Test Platform by Maharaja Institute of Technology, Thandavapura, Nanjangud. Empowering Students. Building Futures.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          minHeight: "100vh",
          background: "var(--color-bg)",
          fontFamily: "var(--font-body)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* App Root */}
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
