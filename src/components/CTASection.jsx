'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

export default function CTASection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="relative z-10 flex h-svh min-h-[680px] flex-col items-stretch justify-center bg-black md:overflow-hidden snap-start">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden z-0 translate-y-[20vh] md:translate-y-0">
        <div className="absolute top-[-10%] right-0 h-[130%] w-full object-cover xl:w-4/6 dot-wave-bg opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-black/0" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black to-black/0" />
      </div>
      <div className="relative z-10 mx-auto w-full px-5 lg:max-w-[1122px] lg:px-4">
        <div className="w-full" ref={ref}>
          <h2
            className={`inline-block whitespace-pre-wrap break-words text-center text-[#00B140] text-[58px] leading-[1.2] md:leading-[165px] tracking-[-0.5px] font-helvetica transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-[20px] blur-[10px]'
            } md:text-[76px] xl:text-[120px]`}
          >
            The An<i className="font-ramillas italic">swe</i>r
          </h2>
          <div className="flex flex-wrap items-end justify-between">
            <p
              className={`text-[32px] text-white md:text-[40px] xl:text-[52px] font-helvetica whitespace-pre-line transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
              }`}
            >
              <span>To </span>
              <i className="font-ramillas italic">All </i>
              <span>Y<i className="font-ramillas italic">ou</i>r </span>
              <br className="hidden md:block" />
              <span className="font-bold text-white">Marketing Needs.</span>
            </p>
            <div
              className={`mt-6 ml-auto md:mt-0 md:ml-0 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[60px]'
              }`}
            >
              <Link
                href="/contact-us"
                className="animated-link inline-flex rounded-lg bg-white text-black transition-all hover:bg-neutral-200"
              >
                <div className="flex-1 h-[38px] md:h-[49px] px-6 flex items-center">
                  <div className="h-[1.25em] max-h-[1.25em] overflow-hidden whitespace-nowrap text-[14px] md:text-[20px] leading-[1.25em] font-semibold font-lato">
                    <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                      <div>LET`S CONNECT</div>
                    </div>
                  </div>
                </div>
                <div className="icon-wrapper h-[38px] md:h-[49px] aspect-[1/1] overflow-hidden flex items-center justify-end rounded-lg">
                  <div className="flex gap-3 px-3 icon text-black">
                    <span className="size-6">
                      <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
                        <path d="M 20 12 L 4 12" fill="transparent" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M 15 17 C 15 17 20 13.318 20 12 C 20 10.682 15 7 15 7" fill="transparent" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="size-6">
                      <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
                        <path d="M 20 12 L 4 12" fill="transparent" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M 15 17 C 15 17 20 13.318 20 12 C 20 10.682 15 7 15 7" fill="transparent" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
