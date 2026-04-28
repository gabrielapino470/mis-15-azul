import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import UploadSection from "@/components/UploadSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Story />
      <Gallery />
      <UploadSection />
      <footer className="px-6 pb-10 text-center text-sm text-silver/80 sm:text-base">
        Gracias por ser parte de este momento tan especial 💙
      </footer>
    </main>
  );
}
