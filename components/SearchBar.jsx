'use client';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {
  const [q, setQ] = useState('');
  return (
    <form
      role="search"
      className="mx-auto flex w-full max-w-[581px] gap-4"
      onSubmit={(e) => { e.preventDefault(); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }}
    >
      <label className="flex h-[52px] flex-1 items-center gap-2 rounded-3xl bg-white px-6 text-shuttle-400">
        <Search className="h-6 w-6 shrink-0" />
        <span className="sr-only">Search courses</span>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Course, topic, creator" className="w-full min-w-0 bg-transparent text-lg text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none" />
      </label>
      <button type="submit" className="btn-lime h-[46px] self-center">Search</button>
    </form>
  );
}
