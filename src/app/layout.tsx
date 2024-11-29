"use client";
import type { Metadata } from "next";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import localFont from "next/font/local";
import "./globals.css";

import { ChatbotInterfaceComponent } from "@/components/chatbot-interface";
import { Navigation } from "@/components/navigation";

// import ForumMainPageComponent from "@/pages/forum";
import RubiksCubeTutorial from "@/pages/rcTotorial";
import Home from "./page";


// import { Header } from "@/components/header";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Coach Cash",
//   description: "Generated by CC",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Router>
            <Navigation />
            {/* <ChatbotInterfaceComponent/> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rcTotorial" element={<RubiksCubeTutorial />} />
              {/* <Route path="/forum" element={<ForumMainPageComponent />} /> */}
            </Routes>
        </Router>
      </body>
    </html>
  );
}