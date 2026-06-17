'use client';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function PageLayoutWrapper({ children }) {
  const pathname = usePathname();
  // Check if current path is under /admin
  const isAdminPage = pathname?.startsWith('/admin');

  useEffect(() => {
    if (isAdminPage) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential ease
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isAdminPage]);

  return (
    <>
      {!isAdminPage && <Navbar />}
      <main className="flex-1" id="page-scroll-container">
        {children}
      </main>
      {!isAdminPage && <Footer />}
    </>
  );
}
