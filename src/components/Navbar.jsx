'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PixelLogo from './PixelLogo';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Works', href: '/our-works' },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('EN');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar fixed inset-x-0 top-0 z-[999] h-[88px] max-w-[100dvw] md:h-24 landscape:h-[60px] transition-all duration-1000 ease-in-out ${scrolled ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container flex h-full items-center justify-between">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-6 lg:gap-x-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={`nav-link inline-flex h-6 items-center font-semibold text-base leading-5 transition-colors hover:text-primary ${
                    pathname === item.href ? 'active' : ''
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="-m-2 z-50 p-2 hover:bg-neutral-800/20 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L24 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M24 8L8 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33325 12H26.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.33325 20H18.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <div className="flex items-center gap-x-4 md:gap-x-6">
          <a className="z-50" href="/">
            <div className="-mt-2">
              <PixelLogo />
            </div>
          </a>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hidden md:flex items-center border-b-2 border-white px-0 py-2 font-lato font-semibold text-lg hover:border-primary transition-colors cursor-pointer bg-transparent border-t-0 border-x-0 rounded-none focus:outline-none"
            >
              <span className="mr-2">{lang}</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`size-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>
                <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-[#0F172A] border border-neutral-700 rounded shadow-lg overflow-hidden z-[1000] text-center">
                <button
                  onClick={() => { setLang('EN'); setDropdownOpen(false); }}
                  className="block w-full px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors w-full border-0 rounded-none bg-transparent"
                >
                  EN
                </button>
                <button
                  onClick={() => { setLang('ID'); setDropdownOpen(false); }}
                  className="block w-full px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors w-full border-0 rounded-none bg-transparent"
                >
                  ID
                </button>
              </div>
            )}
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-y-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={`nav-link text-2xl font-semibold transition-colors hover:text-primary ${
                pathname === item.href ? 'active' : ''
              }`}
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
