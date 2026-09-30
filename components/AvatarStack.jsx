import { User } from 'lucide-react';

const tones = ['#f4c9a8', '#c8a27a', '#8d5b3a', '#e6b98f', '#a8c5f0', '#d9a7c7', '#9fd6b5'];

/** Overlapping avatars + count badge. Swap the circles for <img> once real photos exist. */
export default function AvatarStack({ count = 4, badge = '26+', size = 32, dark = false }) {
  const overlap = size >= 40 ? -16 : -8;
  return (
    <div className="flex items-center" style={{ paddingLeft: -overlap }}>
      {tones.slice(0, count).map((c, i) => (
        <span key={i} className="grid shrink-0 place-items-center rounded-full border-2 border-white" style={{ width: size, height: size, background: c, marginLeft: overlap }}>
          <User className="text-white/80" style={{ width: size * 0.5, height: size * 0.5 }} />
        </span>
      ))}
      <span
        className={`grid shrink-0 place-items-center rounded-full text-xs font-bold ${dark ? 'bg-shuttle-950 text-shuttle-50' : 'bg-lime-400 text-shuttle-950'}`}
        style={{ width: size, height: size, marginLeft: overlap }}
      >{badge}</span>
    </div>
  );
}
