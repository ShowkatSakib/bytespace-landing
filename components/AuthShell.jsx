import Logo from './Logo';
import CourseCard from './CourseCard';
import { Cone, Ring } from './Art';
import { StudentsCard } from './Hero';
import { courses } from '@/lib/data';

export default function AuthShell({ intro, children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-persian-800 text-shuttle-50">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-[120px]">
        <div className="flex h-[120px] items-center"><Logo /></div>
        <div className="grid gap-10 pb-16 lg:grid-cols-[1fr_579px] lg:gap-x-16">
          <div>
            <div className="max-w-[475px]">
              <h1 className="font-heading text-xl font-semibold tracking-[-0.01em]">{intro.title}</h1>
              <p className="mt-4 text-lg leading-[1.6]">{intro.text}</p>
            </div>
            <div className="relative mt-6 hidden h-[585px] w-[548px] lg:block" aria-hidden="true">
              <CourseCard course={courses[1]} className="absolute left-6 top-[89px] w-[373px]" />
              <CourseCard course={courses[2]} className="absolute left-[136px] top-0 w-[373px] shadow-xl" />
              <Ring className="absolute left-[10px] top-[10px] h-[120px] w-[120px]" />
              <StudentsCard lime className="absolute left-[251px] top-[435px]" />
              <Cone className="absolute left-0 top-[430px] h-[140px] w-[140px]" />
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 text-shuttle-950 sm:p-[63px]">{children}</div>
        </div>
      </div>
    </main>
  );
}
