import React from "react";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-h-screen max-w-screen overflow-x-hidden bg-gray-100">
        <div className="h-screen flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
