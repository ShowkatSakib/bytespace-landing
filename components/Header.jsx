'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import Logo from './Logo';

const nav = [['Home', '/'], ['Courses', '/#courses'], ['Creators', '/#creators']];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20">
      <div className="mx-auto flex h-[120px] w-full max-w-[1200px] items-center justify-between px-5 text-shuttle-50">
        <Logo />
        <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 gap-6 md:flex">
          {nav.map(([label, href], i) => (
            <Link key={label} href={href} className={i === 0 ? 'font-medium' : ''}>{label}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/login">Sign In</Link>
          <Link href="/signup">Join Us</Link>
          <button type="button" aria-label="Cart"><ShoppingBag className="h-6 w-6" /></button>
        </div>
        <button type="button" className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {open && (
        <div className="mx-5 flex flex-col gap-4 rounded-2xl bg-white p-6 text-shuttle-950 md:hidden">
          {[...nav, ['Sign In', '/login'], ['Join Us', '/signup']].map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
