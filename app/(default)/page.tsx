
import Waitlist from "@/components/Waitlist";
import SearchBar from "@/components/hero-home";
export const metadata = {
  title: "Contractual",
  description: "The smartest way to organize contracts",
};

import Hero from "@/components/hero-home";

import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Cards from "@/components/Cards";
import WaitlistForm from "@/components/Waitlist";


export default function Home() {
  return (
    <>

      <SearchBar/>
      <Cta />
    </>
  );
}
