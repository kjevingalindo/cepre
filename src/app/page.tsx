"use client";
import Navbar from "../components/landing/components/navbar";
import Footer from "../components/landing/components/Footer";
import HomePage from "../components/landing/homePage";
import Precios from "../components/landing/Precios";

import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("home");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setView={setView} />
      <main className="flex-grow">
        {view === "home" && <HomePage />}
        {view === "precios" && <Precios />}
      </main>
      <Footer />
    </div>
  );
}
