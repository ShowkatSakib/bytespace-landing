import { BarChart3, Coins, Lightbulb, PenTool, Shapes, Timer } from 'lucide-react';

const tones = [
  ['#c7d2fe', '#6366f1', PenTool], ['#e5e7eb', '#9ca3af', Shapes], ['#1e293b', '#0ea5e9', BarChart3],
  ['#fde68a', '#f59e0b', Timer], ['#bbf7d0', '#16a34a', Coins], ['#fbcfe8', '#db2777', Lightbulb],
];

/** Placeholder course image. Pass `src` to use a real photo instead. */
export default function Thumb({ tone = 0, src, alt = '' }) {
  if (src) return <img src={src} alt={alt} className="h-full w-full object-cover" />;
  const [a, b, Icon] = tones[tone % tones.length];
  return (
    <div className="grid h-full w-full place-items-center" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} role="img" aria-label={alt || 'Course preview'}>
      <Icon className="h-14 w-14 text-white/70" strokeWidth={1.5} />
    </div>
  );
}
