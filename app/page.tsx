import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Nav from "./components/NavLink";
import About from "./about/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-primary">
      <div className="max-w-screen-xl px-4 py-4 md:mx-auto">
        <HomeSection />
      </div>
    </main>
  );
}
