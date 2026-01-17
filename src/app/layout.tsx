import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MITT KCET Mock Exam",
  description:
    "Official KCET Mock Test Platform for Maharaja Institute of Technology Thandavapura.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
