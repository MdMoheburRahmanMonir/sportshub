import CategoriesSection from "@/components/shared/CategoriesSection ";
import ContentSection from "@/components/shared/ContentSection";
import HeroSection from "@/components/shared/HeroSection";
import WhyChooseUs from "@/components/shared/WhyChossUs"; 
import EditButton from "./(main)/managemyfacilities/EditButton";



export default async function Home() {
  const response = await fetch(`${process.env.SERVER_URL}`,);
  const facilities = await response.json(); 
  return (
    <div > 
      <EditButton />
      <HeroSection />
      <ContentSection facilities={facilities.slice(0, 6)} />
      <WhyChooseUs />
      <CategoriesSection />
    </div>
  );
}