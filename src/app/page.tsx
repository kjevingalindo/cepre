"use client"
import Footer from "@/components/Footer";
import HomePage from "@/components/landing/homePage";
import OtherPage from "@/components/landing/otherPage";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("home");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setView={setView} />
      <main className="flex-grow mt-16 pt-20">
        {view === "home" && <HomePage />}
        {view === "other" && <OtherPage />}
      </main>
      <Footer />
    </div>
  );
}
