import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Nav from "./components/NavLink";
import About from "./about/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-primary">
      <div className="container mx-auto px-0 py-4 ">
        <HomeSection />
        <About />
      </div>
    </main>
  )
}
