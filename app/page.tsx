import Built from "./_components/landing/Built";
import Footer from "./_components/landing/Footer";
import Navbar from "./_components/landing/Navbar";
import Hero from "./_components/landing/Hero";
import Proof from "./_components/landing/Proof";
import Working from "./_components/landing/Working";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Navbar />
        <Hero />
        <Proof />
        <Working />
        <Built />
        <Footer />
      </main>
    </div>
  );
}
