'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import CTASection from '@/components/CTASection';

const BASE = 'https://pixelgroup.id';

const expertiseCards = [
  { title: 'Data-Driven Targeting', image: `${BASE}/uploads/LRT_Dukuh_Atas_Welcome_Vision_151124_4257_84a34a08cd.webp` },
  { title: 'Customized Solutions', image: `${BASE}/uploads/Copy_of_Pixel_3645_SO_252009ae18.webp` },
  { title: 'Strategic Location', image: `${BASE}/uploads/Copy_of_9_H4_A8576_Edit_SO_b96660aaea.webp` },
];

const whyUsItems = [
  {
    number: '01',
    title: 'Wide Coverage',
    desc: 'Extensive reach in major urban and suburban areas connects businesses with broad audiences at premium locations.',
    image: `${BASE}/uploads/large_DPS_Inter_Arrival_Walkway_241024_3894_e96cde30e4.jpg`,
  },
  {
    number: '02',
    title: 'High-Quality Media',
    desc: "From billboards to digital screens, Pixel's visually impactful media captures attention and leaves a lasting impression.",
    image: `${BASE}/uploads/large_CGK_3_Inter_Departure_Pillar_201224_9337_3ce87f440f.jpg`,
  },
  {
    number: '03',
    title: 'Customized Solutions',
    desc: 'Flexible, tailored strategies ensure effective campaigns for all business sizes and budgets, maximizing ROI.',
    image: `${BASE}/uploads/large_LRT_Train_Le_Mineral_211124_5249_ff22b2f7dd.jpg`,
  },
  {
    number: '04',
    title: 'Strategic Placement',
    desc: 'Key locations across business and transit hubs enhance targeted audience engagement.',
    image: `${BASE}/uploads/large_CGK_3_Inter_Giant_LED_210125_00930_39202e33fb.jpg`,
  },
  {
    number: '05',
    title: 'Expertise and Experience',
    desc: "Pixel's industry experience enables successful, resource-efficient campaigns aligned with market trends.",
    image: `${BASE}/uploads/large_Copy_of_Pixel_1087_SO_cb22894e56.jpg`,
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main>
        <HeroSection />
        <ExpertiseSection />
        <DiscoveryMapSection />
        <WhyUsSection />
      </main>
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate z-10 flex items-center pt-16 md:pt-20">
      <div className="relative isolate z-10 w-full">
        <div aria-hidden="true" className="absolute inset-x-0 top-[-10%] z-0 h-[120%] overflow-hidden bg-black">
          <video autoPlay loop muted playsInline className="absolute top-0 right-0 h-full w-full object-cover md:w-4/6">
            <source src="/video/dot-wave-16x10-c.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-black/0" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black to-black/0" />
        </div>
        <div
          className="container relative z-10 px-4 py-8 font-helvetica md:px-6 md:py-16"
        >
          <h1 className="font-bold text-foreground text-xl md:text-2xl">
            About Us
          </h1>
          <h2 className="mt-4 max-w-[912px] text-[40px] leading-tight md:text-[50px] md:leading-[81.6px] lg:text-[68px] whitespace-pre-line">
            <span className="text-primary inline-block">
              Am
            </span>
            <span className="text-primary font-tt-ramillas italic inline-block">
              plifying
            </span>{' '}
            <span className="text-primary inline-block">
              Business
            </span>{' '}
            <span className="font-bold inline-block">
              Impact
            </span>{' '}
            Through{' '}
            <span className="font-bold inline-block">
              Visual Connections
            </span>
          </h2>
          <p className="mt-6 max-w-[912px] text-[16px] md:mt-8 md:text-[18px] lg:text-[20px] font-lato">
            Pixel Group is a leading Out-of-Home (OOH) advertising company in Indonesia, specializing in providing
            high‑impact advertising spaces through billboards and digital displays across major urban and suburban
            areas.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="relative z-10 flex flex-col justify-center py-10 lg:py-20">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="py-8 font-helvetica md:py-16">
          <h3 className="text-[40px] md:text-[50px] lg:text-[68px] leading-tight md:leading-[81.6px] whitespace-pre-line">
            <span className="text-primary">O</span>
            <span className="text-primary font-tt-ramillas italic">ur</span>{' '}
            <span>Expertise</span>
          </h3>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed md:leading-[29px] tracking-[0.15px] mt-6 md:mt-0 md:pl-0 lg:pl-[40%] font-lato">
            With a focus on helping brands increase their visibility, Pixel Group offers tailored solutions that
            maximize audience reach and engagement. At Pixel Group, we tackle advertising challenges with a
            strategic, data-driven approach, ensuring that brands achieve maximum visibility and impact.
          </p>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[500px] gap-4">
            {expertiseCards.map((card, i) => (
              <div
                key={i}
                className="relative rounded-2xl shadow-md overflow-hidden border border-white transition-opacity duration-300 min-h-[250px] flex-[1] cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end">
                  <div className="bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <p className="text-[24px] font-semibold mb-1 text-white font-helvetica">{card.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DiscoveryMapSection() {
  return (
    <section className="py-0 md:py-20 md:min-h-screen flex flex-col items-stretch">
      <div className="container font-helvetica">
        <h3 className="text-[40px] md:text-[50px] lg:text-[68px] leading-[120%]">
          <span className="text-primary font-bold block">PIXEL</span>
          <span>Discovery Map</span>
        </h3>
        <p className="text-[24px] leading-[130%] md:pl-[30%] lg:pl-[50%] mt-4 font-lato">
          From Jakarta to Bali, Sumatra to Papua, from the busiest spot on the found on the biggest cities to a
          rural area—our OOH is everywhere! Reach your audience anytime, anywhere across Indonesia.
        </p>
      </div>
      <div className="container flex-1 mt-8 pb-16">
        <div className="relative w-full max-w-full overflow-hidden rounded-3xl border border-neutral-700">
          <img
            src={`${BASE}/uploads/about-us/New-map-with-blue-pin-point.png`}
            alt="PIXEL Discovery Map"
            className="w-full h-auto object-contain"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="py-10 lg:py-20 relative z-10">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="py-8 md:py-16 font-helvetica">
          <div className="flex justify-end mb-6">
            <h3 className="text-[40px] md:text-[50px] lg:text-[68px] leading-tight md:leading-[81.6px]">
              <span className="text-primary">W</span>
              <span className="text-primary font-tt-ramillas italic">hy</span> Us
            </h3>
          </div>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed md:leading-[29px] tracking-[0.15px] w-full lg:w-[60%] font-lato">
            Pixel Group stands out in Indonesia&apos;s OOH advertising landscape due to its comprehensive approach
            to brand visibility. With an extensive network of billboards and digital displays strategically placed
            in high-traffic areas across Indonesia, Pixel ensures maximum exposure for its client&apos;s campaigns.
          </p>
        </div>

        {/* Desktop: Sticky scroll cards */}
        <div className="relative hidden min-h-[150vh] py-8 pb-[50px] md:block md:py-12 lg:mx-20">
          {whyUsItems.map((item, i) => (
            <div key={i} className="sticky" style={{ top: '200px', zIndex: 5 + i }}>
              <div className="bg-black flex flex-row md:gap-[32px] lg:gap-[64px] mb-16 items-center h-[240px]">
                <div className="relative w-[429px] h-full rounded-lg overflow-hidden border border-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="w-[2px] h-full bg-white rounded-lg" />
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-green-500 font-medium mb-2">{item.number}</p>
                  <h4 className="text-2xl font-bold mb-2 font-helvetica">{item.title}</h4>
                  <p className="font-lato">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Regular stacked cards */}
        <div className="space-y-8 py-8 md:hidden">
          {whyUsItems.map((item, i) => (
            <div key={i} className="bg-black flex flex-row gap-4 items-center h-[240px]">
              <div className="relative w-[160px] h-full rounded-lg overflow-hidden border border-white shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-[2px] h-full bg-white rounded-lg shrink-0" />
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-green-500 font-medium mb-2">{item.number}</p>
                <h4 className="text-xl font-bold mb-2 font-helvetica">{item.title}</h4>
                <p className="font-lato text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
