import Header from './Header';
import SearchBar from './SearchBar';
import AvatarStack from './AvatarStack';
import { Cone, PersonArt, Ring } from './Art';
import { Star } from 'lucide-react';

export function ProgressCard({ className = '' }) {
  return (
    <div className={`w-[232px] rounded-2xl bg-white p-4 text-shuttle-950 shadow-xl ${className}`}>
      <p className="text-sm font-medium">Learning Progress</p>
      <p className="mt-2 font-heading text-5xl font-semibold tracking-[-0.01em]">55%</p>
      <div className="mt-2 h-2 w-full rounded-full bg-[#F6F6F6]"><div className="h-2 w-[56%] rounded-full bg-lime-400" /></div>
    </div>
  );
}

export function StudentsCard({ className = '', lime = false }) {
  return (
    <div className={`w-[258px] rounded-2xl p-4 text-shuttle-950 shadow-xl ${lime ? 'bg-lime-400' : 'bg-white'} ${className}`}>
      <p className="font-medium">Happy Students</p>
      <p className="mb-2 flex items-center gap-1 text-xs font-bold">4.5 (240) <Star className={`h-4 w-4 ${lime ? 'fill-persian-800 text-persian-800' : 'fill-lime-400 text-lime-400'}`} /></p>
      <AvatarStack count={7} badge="2K+" size={43} dark />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-persian-800 text-white">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div aria-hidden="true" className="absolute left-1/2 top-[582px] h-[1149px] w-[1149px] -translate-x-1/2 rounded-full border-[320px] border-lime-500" />
      <Ring className="absolute left-[7%] top-[150px] hidden h-[190px] w-[190px] lg:block" />
      <Cone white className="absolute right-[6%] top-[190px] hidden h-[120px] w-[120px] lg:block" />
      <Header />
      <div className="container-x relative pt-6 text-center md:pt-[49px]">
        <h1 className="h-display mx-auto max-w-[935px] text-[40px] md:text-[72px]">Get Access to Hundreds Courses Available</h1>
        <p className="mx-auto mt-8 max-w-[819px] text-lg leading-[1.6] text-shuttle-100">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        <div className="mt-[60px]"><SearchBar /></div>
      </div>
      <div className="relative mx-auto mt-16 h-[541px] w-full max-w-[578px] px-5 md:mt-[90px]">
        <PersonArt className="h-full w-full drop-shadow-2xl" />
        <ProgressCard className="absolute right-[-120px] top-[139px] hidden lg:block" />
        <StudentsCard lime={false} className="absolute bottom-[110px] left-[-140px] hidden lg:block" />
        <div className="absolute left-[-40px] top-[127px] hidden rounded-2xl bg-white p-4 text-shuttle-950 shadow-xl lg:block">
          <p className="font-medium">UI/UX Design</p>
          <p className="text-xs text-shuttle-400">200 Courses • 1000+ Students</p>
        </div>
        <Cone className="absolute bottom-0 left-[-260px] hidden h-[130px] w-[130px] lg:block" />
      </div>
    </section>
  );
}
