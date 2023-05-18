import "./globals.css";
import { Lexend } from "next/font/google";
import AppProvider from "@/context/AppContext";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Luvcord",
  description:
    "Luvcord is the easiest way to talk over voice, video, and text. Talk, chat, hang out, and stay close with your friends and communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppProvider>
        <body className={`${lexend.className} overflow-hidden relative`}>
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
