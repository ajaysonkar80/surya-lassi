
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
export default function Home() {
  return (
    <main>
      <Header />
      <Separator className="h-[0.5px]" />
      <HeroSection />
      <Separator className="h-[0.5px]" />
      <FeaturesSection />
      <Separator className="h-[0.5px]" />
      <Footer />
    </main>
  );
}