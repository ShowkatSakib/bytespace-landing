import Link from 'next/link';

export function LogoMark({ className = 'h-8 w-7 text-lime-400' }) {
  return (
    <svg viewBox="0 0 29 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M0 3c0-1.7 1.3-3 3-3h3.5C8.4 0 10 1.6 10 3.5V10c1.5-1.3 3.400-2 5.500-2C22 8 28.900 12.500 28.900 20S22 32 15.500 32c-2.600 0-4.900-1-6.600-2.800L8 32H3c-1.700 0-3-1.300-3-3V3Zm15.500 11.500c-3 0-5.500 2.400-5.500 5.500s2.500 5.500 5.500 5.500 5.500-2.400 5.500-5.500-2.500-5.500-5.500-5.500Z" />
    </svg>
  );
}

export default function Logo({ dark = false }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="ByteSpace home">
      <LogoMark />
      <span className={`font-logo text-2xl font-bold ${dark ? 'text-shuttle-950' : 'text-shuttle-50'}`}>ByteSpace</span>
    </Link>
  );
}
