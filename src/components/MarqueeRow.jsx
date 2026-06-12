'use client';

export default function MarqueeRow({ images, duration = '40s', reverse = false }) {
  const duplicated = [...images, ...images];
  
  return (
    <div className="flex justify-start overflow-hidden" style={{ transform: 'translateZ(0)' }}>
      <div
        className="flex h-12 shrink-0 flex-nowrap items-center will-change-transform md:h-14"
        aria-hidden="true"
        style={{
          animation: `marquee ${duration} linear infinite ${reverse ? 'reverse' : 'normal'}`,
          transform: 'translateZ(0)',
        }}
      >
        {duplicated.map((img, i) => (
          <img
            key={i}
            className="mx-6 inline-block h-full w-auto md:mx-12 transition-opacity"
            src={img.src}
            alt={img.alt}
            loading="eager"
            decoding="async"
            style={{ transform: 'translateZ(0)' }}
          />
        ))}
      </div>
    </div>
  );
}
