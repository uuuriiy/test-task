import { MainLayout } from "componets/MainLayout";
import { HeroSection } from "componets/HeroSection";
import { HerosList } from "componets/HerosList";

export default function Page() {
  return (
    <MainLayout>
      <HeroSection />
      <HerosList />
    </MainLayout>
  );
}
