

import Card from "@/components/Card";
import Footer from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/InfinteMoving";
import Instructors from "@/components/instructor";
import UpcomingWebinar from "@/components/UpcomingWebinar";

import { ScrollRevealDemo } from "@/components/Why_choose";



export default function Home() {
  return (
<>

<HeroSection />
<Card/>
<ScrollRevealDemo/>
<InfiniteMovingCardsDemo/>
<UpcomingWebinar/>
<Instructors/>
<Footer/>
</>
  );
}
