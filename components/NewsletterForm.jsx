'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <form
      className="flex max-w-[504px] gap-4"
      onSubmit={(e) => { e.preventDefault(); if (/\S+@\S+\.\S+/.test(email)) setDone(true); }}
    >
      <label className="sr-only" htmlFor="nl-email">Email</label>
      <input
        id="nl-email" type="email" required value={email} placeholder="Enter your email"
        onChange={(e) => { setEmail(e.target.value); setDone(false); }}
        className="h-[52px] min-w-0 flex-1 rounded-full border border-shuttle-200 px-6 text-base placeholder:text-shuttle-950 focus:border-persian-800 focus:outline-none"
      />
      <button type="submit" className="btn-lime h-[46px] self-center">{done ? 'Joined' : 'Search'}</button>
    </form>
  );
}
