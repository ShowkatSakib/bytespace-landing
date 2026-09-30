import { Hexagon } from 'lucide-react';

export default function Partners() {
  return (
    <section className="bg-shuttle-50 py-[70px]" aria-label="Partners">
      <ul className="container-x flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className="flex items-center gap-2 text-2xl font-semibold text-shuttle-400"><Hexagon className="h-8 w-8" />Logoipsum</li>
        ))}
      </ul>
    </section>
  );
}
