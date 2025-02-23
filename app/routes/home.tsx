import type { Route } from "./+types/home";
import Header from "~/Components/Header";
import Hero from "~/Components/Hero";
import Footer from "~/Components/Footer";
import Features from "~/Components/Features";
import CTA from "~/Components/CTA";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dave store" },
    { name: "description", content: "Welcome to Dave store!" },
  ];
}


export default function home() {
  return <div className='flex flex-col min-h-screen'>

    {/* Header */}
<Header />
<main className="flex-grow">
{/* hero section */}
<Hero />
{/* features section */}
<Features />
{/* CTA Section */}
<CTA />
</main>
{/* Footer */}
<Footer />
  </div>;
}
