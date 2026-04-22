import NavRail from "@/components/Layout/NavRail";
import Sidebar from "@/components/Layout/Sidebar";
import About from "@/components/sections/About";
import RLA from "@/components/sections/RLA";
import Work from "@/components/sections/Work";
import WorkHistory from "@/components/sections/WorkHistory";
import Writing from "@/components/sections/Writing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Fixed left nav rail */}
      <NavRail />

      {/* Fixed sidebar */}
      <Sidebar />

      {/* Scrollable main content */}
      <main className="ml-[344px] min-h-screen flex flex-col">
        <div className="flex-1 px-10 md:px-14 max-w-[820px]">
          <About />
          <RLA />
          <Work />
          <WorkHistory />
          <Writing />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
