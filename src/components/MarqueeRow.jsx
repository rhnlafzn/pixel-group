'use client';

export default function MarqueeRow({ images, duration = '40s', reverse = false }) {
  const doubledImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden" style={{ transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' }}>
      <div className="flex justify-start" style={{ transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' }}>
        {Array.from({ length: 3 }).map((_, colIdx) => (
          <div
            key={colIdx}
            className="flex h-12 shrink-0 animate-marquee motion-safe:animate-marquee flex-nowrap items-center will-change-transform md:h-14"
            aria-hidden="true"
            style={{
              animationName: 'marquee',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationDuration: duration,
              animationDirection: reverse ? 'reverse' : 'normal',
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)',
            }}
          >
            {doubledImages.map((img, i) => (
              <img
                key={i}
                className="mx-6 inline-block h-full w-auto md:mx-12 transition-opacity pointer-events-none select-none"
                src={img.src}
                alt={img.alt}
                draggable="false"
                loading="eager"
                decoding="async"
                style={{ transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
