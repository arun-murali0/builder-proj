import React from "react";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-h-screen max-w-screen overflow-x-hidden ">
        <div className="h-screen flex justify-center items-center flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
