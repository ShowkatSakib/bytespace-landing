import { BarChart3, Star } from 'lucide-react';
import Thumb from './Thumb';
import AvatarStack from './AvatarStack';

export default function CourseCard({ course: c, className = '' }) {
  return (
    <article className={`flex h-full w-full max-w-[373px] flex-col rounded-3xl border border-shuttle-200 bg-white p-4 ${className}`}>
      <div className="relative h-[195px] shrink-0 overflow-hidden rounded-xl">
        <Thumb tone={c.tone} alt={c.title} />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
          {[`${c.lessons} Lessons`, c.duration, `${c.comments} Comments`].map((t) => (
            <span key={t} className="rounded-full bg-[#F6F6F6]/60 px-3 py-1.5 text-xs font-medium leading-none text-ink-700 backdrop-blur-sm">{t}</span>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-heading text-xl font-semibold tracking-[-0.01em] text-black" title={c.title}>{c.title}</h3>
          <p className="text-xs text-ink-700">by {c.author}</p>
        </div>
        <span className="flex shrink-0 items-center text-lg text-ink-700">{c.rating}<Star className="h-6 w-6 text-shuttle-200" /></span>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-8 items-center gap-1 rounded-full bg-shuttle-50 px-3 text-xs font-medium text-shuttle-700"><BarChart3 className="h-5 w-5" />{c.level}</span>
        <AvatarStack />
      </div>
      <p className="mt-4 flex items-end"><span className="font-heading text-xl font-semibold text-persian-800">${c.price}</span><span className="text-xs text-ink-700">/lifetime</span></p>
    </article>
  );
}
