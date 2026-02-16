import CardNav from '@/components/CardNav';
import HeroCarousel from '@/components/HeroCarousel';
import NewsSection from '@/components/NewsSection';
import logo from '@/public/logo.png';
import HomeAbout from '@/components/HomeAbout';
import Speach from '@/components/Speach';
import Services from '@/components/Services';
import LifeInsideAcademy from '@/components/LifeInsideAcademy';
import Praise from '@/components/Praise';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
export default function Home() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];
  return (
    <div className='overflow-hidden'>
      <div className="relative w-full">
        <CardNav
          logo={logo.src}
          logoAlt="Academy ACA Logo"
          items={items as []}
          baseColor="#fff"
          glassEffect
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
          className='w-full fixed top-0'
        />
      </div>
      <HeroCarousel />
      <hr />
      <NewsSection />
      <hr />
      <HomeAbout />
      <hr />
      <Speach />
      <hr />
      <Services />
      <hr />
      <LifeInsideAcademy />
      <hr />
      <Praise />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
