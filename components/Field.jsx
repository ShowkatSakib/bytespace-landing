'use client';
import { useId } from 'react';

export default function Field({ label, error, ...props }) {
  const id = useId();
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      <input
        id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} {...props}
        className={`h-[52px] rounded-xl border bg-white px-6 text-lg placeholder:text-shuttle-400 focus:border-persian-800 focus:outline-none ${error ? 'border-red-500' : 'border-shuttle-100'}`}
      />
      {error && <p id={`${id}-e`} className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
