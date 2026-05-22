import CategoriesSection from "@/components/shared/CategoriesSection ";
import ContentSection from "@/components/shared/ContentSection";
import HeroSection from "@/components/shared/HeroSection";
import WhyChooseUs from "@/components/shared/WhyChossUs";  

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}`,);
  const facilities = await response.json();
  return (
    <div > 
      <HeroSection />
      <ContentSection facilities={facilities.slice(0, 6)} />
      <WhyChooseUs />
      <CategoriesSection />
    </div>
  );
}