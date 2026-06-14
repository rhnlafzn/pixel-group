'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import CTASection from '@/components/CTASection';

const BASE = 'https://pixelgroup.id';

const portfolioItems = [
  {
    title: 'Digital Arrival Walkway',
    location: 'I Gusti Ngurah Rai International Airport, Bali',
    image: `${BASE}/uploads/large_DPS_Inter_Arrival_Walkway_241024_3894_e96cde30e4.jpg`,
  },
  {
    title: 'Entrance Welcome Vision',
    location: 'I Gusti Ngurah Rai International Airport, Bali',
    image: `${BASE}/uploads/large_Copy_of_Pixel_1087_SO_cb22894e56.jpg`,
  },
  {
    title: 'Digital Departure Pillar',
    location: 'Soekarno-Hatta International Airport, T3 International Departure',
    image: `${BASE}/uploads/large_CGK_3_Inter_Departure_Pillar_201224_9337_3ce87f440f.jpg`,
  },
  {
    title: 'LED GBK Runner',
    location: 'Jl. Gerbang Pemuda, Gelora Bung Karno',
    image: `${BASE}/uploads/GBK_Gerbang_Pemuda_140125_00635_6e68be9684.jpg`,
  },
  {
    title: 'Check In Walkway Neonbox',
    location: 'Soekarno-Hatta International Airport, T2 Domestic Departure',
    image: `${BASE}/uploads/large_IMG_20250411_103911_38db06e4de.jpg`,
  },
  {
    title: 'Arrival Door LED',
    location: 'I Gusti Ngurah Rai International Airport, Bali',
    image: `${BASE}/uploads/DPS_OOH_Welcome_Bali_231024_3301_d828ae8dab.jpg`,
  },
  {
    title: 'Digital Arrival Alley',
    location: 'Soekarno-Hatta Intenrational Airport, Arrival Point',
    image: `${BASE}/uploads/large_IMG_20250411_103839_3acbf2b5d6.jpg`,
  },
  {
    title: 'Tegalluar : Tunnel Branding',
    location: 'KCIC Tegalluar Railway Station',
    image: `${BASE}/uploads/HSR_TGR_Tunnel_Branding_051224_7082_9e2e81582a.jpg`,
  },
  {
    title: 'Digital AC Diffuser',
    location: 'Soekarno-Hatta International Airport, T3 International Departure',
    image: `${BASE}/uploads/CGK_T3_Domestik_Welcome_Vision_091024_2036_4f906f0647.jpg`,
  },
];

export default function OurWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <section className="relative z-10 mt-24 pt-4 pb-4 font-helvetica md:pb-20">
        <div className="relative isolate z-10 h-[390px] md:h-[490px]">
          <div aria-hidden="true" className="absolute inset-x-0 top-[-30%] z-0 h-[120%] overflow-hidden bg-black md:h-[150%]">
            <video autoPlay loop muted playsInline className="absolute top-0 right-0 h-full w-4/6 object-cover">
              <source src={`${BASE}/video/dot-wave-16x10-c.mp4`} type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-black/0" />
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black to-black/0" />
          </div>
          <div
            ref={ref}
            className="container relative z-10 font-helvetica"
          >
            <h1
              className={`font-bold text-2xl text-foreground transition-all duration-1000 ${
                isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[10px] translate-y-[40px]'
              }`}
            >
              Our Works
            </h1>
            
            <h2
              className={`mt-4 max-w-[536px] text-[40px] leading-[120%] md:text-[50px] lg:text-[68px] tracking-[-0.25px] transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[10px] translate-y-[40px]'
              }`}
            >
              <span className="text-primary">Presence</span> that
              <br className="md:hidden" />
              {' '}<span>travels</span> <span className="font-bold">with you</span>
            </h2>
            <p
              className={`mt-4 text-[24px] lg:pl-[40%] transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[10px] translate-y-[40px]'
              }`}
            >
              Unbeatable advertising assets all around Indonesia&apos;s transit points.
            </p>
          </div>
        </div>
      </section>

      <section className="z-10 py-4 pb-20 md:py-20">
        <div className="container font-helvetica">
          <div className="flex justify-end">
            <h3
              className={`max-w-[664px] text-right text-[40px] leading-[120%] md:text-[50px] lg:text-[68px] transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[10px] translate-y-[40px]'
              }`}
            >
              <span className="block font-bold text-primary">St<span className="italic">rate</span>gic OOH,</span> Nationwide <span className="font-bold">Presence</span>
            </h3>
          </div>
          <p
            className={`mt-4 max-w-[640px] text-[24px] leading-[130%] tracking-[0.15px] transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[10px] translate-y-[40px]'
            }`}
          >
            With a strategic network spanning across the country, we ensure your brand stands out in the right place, at the right time—every time.
          </p>
        </div>
        <div className="container mt-14 min-h-screen overflow-visible">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}

function PortfolioGrid() {
  return (
    <div className="columns-1 gap-5 sm:columns-2 md:gap-7 xl:columns-3">
      {portfolioItems.map((item, i) => (
        <PortfolioCard key={i} item={item} index={i} />
      ))}
    </div>
  );
}

function PortfolioCard({ item, index }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`break-inside-avoid mb-5 sm:mb-7 group relative flex flex-col cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-700 mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-white text-[14px] md:text-[16px] font-lato font-semibold mb-1">
          {item.location}
        </p>
        <h3 className="font-helvetica text-xl md:text-2xl font-bold text-primary">
          {item.title}
        </h3>
      </div>
    </div>
  );
}
