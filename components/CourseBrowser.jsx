'use client';
import { useState } from 'react';
import CourseCard from './CourseCard';
import { courses, tabs } from '@/lib/data';

/** Tabs re-order the mock catalogue; hook this up to a real API later. */
export default function CourseBrowser() {
  const [active, setActive] = useState(0);
  const list = courses.map((_, i) => courses[(i + active) % courses.length]);
  return (
    <section id="courses" className="scroll-mt-4 bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-[917px] text-center">
          <h2 className="h-display text-[32px] text-vulcan-950 md:text-[44px]">Discover Your Passion, Build Your Skills</h2>
          <p className="mt-4 text-lg leading-[1.6] text-shuttle-400">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
        </div>
        <div className="mx-auto mt-10 flex max-w-[1086px] flex-wrap justify-center gap-4" role="tablist" aria-label="Course categories">
          {tabs.map((t, i) => (
            <button key={t} type="button" role="tab" aria-selected={i === active} onClick={() => setActive(i)}
              className={`rounded-3xl px-4 py-3 text-base font-medium transition ${i === active ? 'bg-lime-400 text-shuttle-950' : 'bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100'}`}>{t}</button>
          ))}
          <a href="#categories" className="px-4 py-3 text-base font-medium text-persian-800">+ More</a>
        </div>
        <div className="mt-12 grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (<CourseCard key={c.id} course={c} />))}
        </div>
      </div>
    </section>
  );
}
