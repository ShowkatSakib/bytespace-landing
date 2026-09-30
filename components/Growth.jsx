import { CheckCircle2 } from 'lucide-react';
import CourseCard from './CourseCard';
import { Cone, PersonArt, Ring } from './Art';
import { ProgressCard, StudentsCard } from './Hero';
import { courses } from '@/lib/data';

const stats = [['12K', 'Students'], ['70+', 'Courses'], ['16', 'Creators']];
const perks = ['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'];

function Blobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-40 bottom-[-200px] h-[900px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgb(0_59_226/0.24),transparent)]" />
      <div className="absolute -left-40 -top-64 h-[900px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgb(203_252_1/0.4),transparent)]" />
      <div className="absolute -left-64 top-1/3 h-[900px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgb(0_59_226/0.16),transparent)]" />
      <div className="absolute -left-20 bottom-20 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgb(203_252_1/0.6),transparent)]" />
    </div>
  );
}

export default function Growth() {
  return (
    <section id="creators" className="relative scroll-mt-4 overflow-hidden bg-[#FAFAFA] py-16 md:py-[120px]">
      <Blobs />
      <div className="container-x relative flex flex-col gap-[72px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="max-w-[574px] lg:flex-1">
            <h2 className="h-display text-[32px] md:text-[44px]">Your Path to Professional Growth Starts Here!</h2>
            <p className="mt-10 max-w-[477px] text-lg leading-[1.6] text-shuttle-700">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
            <dl className="mt-10 flex gap-10 sm:gap-14">
              {stats.map(([n, l]) => (<div key={l}><dt className="font-heading text-4xl font-medium tracking-[-0.01em] text-persian-800">{n}</dt><dd className="text-lg text-shuttle-700">{l}</dd></div>))}
            </dl>
          </div>
          <div className="relative w-full max-w-[621px] lg:flex-1">
            <CourseCard course={courses[0]} />
            <ProgressCard className="absolute -right-2 top-[213px] hidden sm:block lg:right-[-30px]" />
            <Cone className="absolute -top-8 right-6 hidden h-[110px] w-[110px] sm:block" />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-[79px]">
          <div className="relative h-[596px] w-full max-w-[541px] lg:flex-1">
            <div className="absolute left-0 top-11 z-10 w-[232px] rounded-2xl bg-persian-800 p-4 text-shuttle-50">
              <p className="font-medium">Total Revenue</p><p className="text-[10px]">July 1-28</p>
              <p className="mt-2 flex items-center justify-between font-heading text-2xl font-semibold">$120.29 <span className="rounded-full bg-lime-500 px-2 text-[10px] font-medium text-shuttle-950">+12$</span></p>
              <div className="mt-3 h-2 rounded-full bg-white"><div className="h-2 w-[56%] rounded-full bg-lime-400" /></div>
            </div>
            <div className="absolute left-0 top-[194px] z-10 w-[134px] rounded-2xl bg-persian-800 p-4 text-shuttle-50">
              <p className="font-medium">Year to Date</p><p className="text-[10px]">2023</p>
              <p className="mt-2 font-heading text-2xl font-semibold">$1,200.38</p>
              <span className="mt-2 inline-block rounded-full bg-lime-500 px-2 text-[10px] font-medium text-shuttle-950">+12$</span>
            </div>
            <PersonArt className="absolute left-[calc(50%-235px)] top-0 h-full w-[435px] max-w-full drop-shadow-2xl" />
            <StudentsCard className="absolute bottom-[60px] right-0 z-10" />
            <Ring className="absolute right-4 top-[80px] h-[120px] w-[120px]" />
          </div>
          <div className="max-w-[580px] lg:flex-1">
            <h2 className="h-display text-[32px] md:text-[44px]">Create &amp; Manage Courses Easily.</h2>
            <p className="mt-10 text-lg font-bold leading-[1.55]">ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul className="mt-10 flex flex-col gap-4">
              {perks.map((p) => (<li key={p} className="flex items-center gap-2 text-lg font-medium"><CheckCircle2 className="h-6 w-6 fill-persian-800 text-white" />{p}</li>))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
