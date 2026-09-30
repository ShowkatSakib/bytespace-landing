'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Facebook } from 'lucide-react';
import Field from './Field';

const emailOk = (v) => /^\S+@\S+\.\S+$/.test(v);

/** mode: 'login' | 'signup'. No backend – it validates and shows a success state. */
export default function AuthForm({ mode }) {
  const signup = mode === 'signup';
  const [v, setV] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const set = (k) => (e) => { setV({ ...v, [k]: e.target.value }); setDone(false); };

  function submit(e) {
    e.preventDefault();
    const er = {};
    if (signup && v.name.trim().length < 2) er.name = 'Enter your full name.';
    if (!emailOk(v.email)) er.email = 'Enter a valid email, like name@example.com.';
    if (v.password.length < 8) er.password = 'Use at least 8 characters.';
    setErrors(er);
    setDone(Object.keys(er).length === 0);
  }

  return (
    <form onSubmit={submit} noValidate className="flex h-full flex-col justify-between gap-16">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-lg text-persian-800">{signup ? 'Create an Account' : 'Sign In'}</p>
          <h2 className="h-display text-[36px] md:text-[44px]">{signup ? 'Welcome to ByteSpace' : 'Welcome Back'}</h2>
        </div>
        <div className="flex flex-col items-end gap-6">
          {signup && <Field label="Full Name" value={v.name} onChange={set('name')} error={errors.name} placeholder="Jamie Davis" autoComplete="name" />}
          <Field label="Email" type="email" value={v.email} onChange={set('email')} error={errors.email} placeholder="designer@example.com" autoComplete="email" />
          <Field label="Password" type="password" value={v.password} onChange={set('password')} error={errors.password} placeholder="********" autoComplete={signup ? 'new-password' : 'current-password'} />
          <button type="submit" className="btn-lime">{signup ? 'Continue' : 'Sign In'}</button>
          {done && <p role="status" className="w-full text-right text-sm text-persian-800">{signup ? 'Account created (demo – no server connected).' : 'Signed in (demo – no server connected).'}</p>}
        </div>
        {!signup && (
          <div className="flex flex-col items-center gap-10">
            <div className="flex w-full items-center gap-3 text-lg text-[#888]"><hr className="flex-1 border-[#D1D1D1]" />or<hr className="flex-1 border-[#D1D1D1]" /></div>
            <div className="flex gap-4">
              <button type="button" aria-label="Continue with Facebook" className="grid h-[72px] w-[72px] place-items-center rounded-3xl border border-[#D1D1D1]"><Facebook className="h-9 w-9 fill-black" /></button>
              <button type="button" aria-label="Continue with Google" className="grid h-[72px] w-[72px] place-items-center rounded-3xl border border-[#D1D1D1] font-heading text-4xl font-semibold">G</button>
            </div>
          </div>
        )}
      </div>
      <p className="text-center text-base text-[#888]">
        {signup ? 'Already have an account? ' : 'New user? '}
        <Link href={signup ? '/login' : '/signup'} className="text-persian-800">{signup ? 'Login' : 'Create an account'}</Link>
      </p>
    </form>
  );
}
