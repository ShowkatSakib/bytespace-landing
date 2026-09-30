import { User } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-16 md:py-[74px]">
      <div aria-hidden="true" className="absolute -right-32 -top-64 h-[900px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgb(203_252_1/0.4),transparent)]" />
      <div aria-hidden="true" className="absolute -left-64 top-40 h-[900px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgb(0_59_226/0.24),transparent)]" />
      <div className="container-x relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2 className="h-display text-[32px] md:text-[44px] lg:w-[577px] lg:shrink-0">Discover What Our Community Is Saying</h2>
          <p className="text-lg leading-[1.6] text-ink-700">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <ul className="mt-16 grid items-start gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="flex flex-col gap-6 rounded-3xl bg-white p-6">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[#f4c9a8] to-[#8d5b3a]"><User className="h-9 w-9 text-white/80" /></span>
              <div><p className="font-heading text-xl font-semibold text-black">{t.name}</p><p className="text-lg text-persian-800">{t.role}</p></div>
              <blockquote className="text-lg leading-[1.6] text-ink-700">{t.quote}</blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
