'use client';
import { useEffect, useRef } from 'react';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.classList.add('preloader-animate');
    const timeout = setTimeout(() => {
      onComplete && onComplete();
    }, 6000); // total duration
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <>
      <style jsx global>{`
        .preloader-container {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f6f8fb;
          overflow: hidden;
          z-index: 9999;
        }
        .fluid-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .fluid-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.55;
          mix-blend-mode: multiply;
        }
        .blob-1 {
          width: 450px;
          height: 450px;
          background: #1a53d0;
          left: -5%;
          top: -5%;
          animation: blobMove1 10s ease-in-out infinite alternate;
        }
        .blob-2 {
          width: 550px;
          height: 550px;
          background: #b89c72;
          right: -5%;
          bottom: -5%;
          animation: blobMove2 12s ease-in-out infinite alternate;
        }
        .blob-3 {
          width: 400px;
          height: 400px;
          background: #1e3447;
          left: 25%;
          top: 25%;
          animation: blobMove3 9s ease-in-out infinite alternate;
        }
        @keyframes blobMove1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(120px, 80px) scale(1.15); }
          100% { transform: translate(40px, 160px) scale(0.95); }
        }
        @keyframes blobMove2 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-80px, -120px) scale(0.85); }
          100% { transform: translate(-160px, -40px) scale(1.1); }
        }
        @keyframes blobMove3 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-60px, 100px) scale(1.1); }
          100% { transform: translate(100px, -60px) scale(0.9); }
        }
        .title {
          font-family: Helvetica, sans-serif;
          font-weight: 900;
          font-size: 2.2rem;
          color: #1e3447;
          text-align: center;
          letter-spacing: 0.12em;
          z-index: 2;
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          animation: titleFadeIn 3.5s ease-in-out forwards 3s;
        }
        @media (min-width: 640px) {
          .title {
            font-size: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .title {
            font-size: 4rem;
          }
        }
        @keyframes titleFadeIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); filter: blur(8px); }
          20% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          80% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-15px); filter: blur(4px); }
        }
        .preloader-animate {
          animation: containerFadeOut 1s ease forwards 5.2s;
        }
        @keyframes containerFadeOut {
          to { opacity: 0; visibility: hidden; transform: translateY(-100px); }
        }
      `}</style>
      <div ref={containerRef} className="preloader-container">
        <div className="fluid-bg">
          <div className="fluid-blob blob-1" />
          <div className="fluid-blob blob-2" />
          <div className="fluid-blob blob-3" />
        </div>
        <h1 className="title">IDEA KREASI MEDIA</h1>
      </div>
    </>
  );
}
