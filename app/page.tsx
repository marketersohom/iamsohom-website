// Revalidate the page hourly so new Sanity blog posts surface without a redeploy.
export const revalidate = 3600;

import NavRail from "@/components/Layout/NavRail";
import Sidebar from "@/components/Layout/Sidebar";
import MobileHeader from "@/components/Layout/MobileHeader";
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
      {/* Mobile-only top header + slide-in menu */}
      <MobileHeader />

      {/* Fixed left nav rail (desktop only) */}
      <NavRail />

      {/* Fixed sidebar (desktop only) */}
      <Sidebar />

      {/* Scrollable main content */}
      <main className="lg:ml-[344px] min-h-screen flex flex-col pt-14 lg:pt-0">
        <div className="flex-1 px-5 sm:px-7 md:px-10 lg:px-14 max-w-[820px] w-full">
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
