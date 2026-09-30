import { User } from 'lucide-react';

/** Decorative lime shapes standing in for the 3D ornaments in the design. */
export function Ring({ className = '' }) {
  return <div aria-hidden="true" className={`rounded-full border-[26px] border-lime-400 shadow-[inset_0_-8px_12px_rgb(0_0_0/0.12)] ${className}`} />;
}
export function Cone({ className = '', white = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id={white ? 'cw' : 'cl'} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={white ? '#ffffff' : '#E6FF5C'} />
          <stop offset="1" stopColor={white ? '#c9ccd3' : '#B4E000'} />
        </linearGradient>
      </defs>
      <path d="M50 6 94 88H6Z" fill={`url(#${white ? 'cw' : 'cl'})`} strokeLinejoin="round" stroke={white ? '#fff' : '#D4FB20'} strokeWidth="8" />
    </svg>
  );
}

/** Placeholder for the cut-out person photo. Replace with <img src="/images/hero.png" /> when available. */
export function PersonArt({ className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-t-[48px] bg-gradient-to-b from-white/30 to-white/5 ${className}`} role="img" aria-label="Learner with laptop (placeholder)">
      <div className="absolute bottom-0 left-1/2 h-[62%] w-[70%] -translate-x-1/2 rounded-t-[120px] bg-[#1b2559]" />
      <div className="absolute left-1/2 top-[14%] grid h-[34%] w-[26%] -translate-x-1/2 place-items-center rounded-full bg-[#e8b48d]"><User className="h-1/2 w-1/2 text-white/60" /></div>
      <div className="absolute bottom-[6%] left-1/2 h-[24%] w-[46%] -translate-x-1/2 rounded-md bg-shuttle-300 shadow-lg" />
    </div>
  );
}
