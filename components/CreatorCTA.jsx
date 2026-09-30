import Link from 'next/link';
import { Cone, Ring } from './Art';

export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-persian-800 py-24 text-shuttle-50 md:py-[84px]">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <Ring className="absolute -left-10 top-4 hidden h-[150px] w-[150px] lg:block" />
      <Cone className="absolute bottom-6 left-[6%] hidden h-[120px] w-[120px] lg:block" />
      <Cone white className="absolute right-[8%] top-6 hidden h-[110px] w-[110px] lg:block" />
      <Ring className="absolute -right-10 bottom-0 hidden h-[170px] w-[170px] lg:block" />
      <div className="container-x relative flex max-w-[964px] flex-col items-center gap-10 text-center">
        <h2 className="h-display max-w-[710px] text-[32px] md:text-[44px]">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="text-lg leading-[1.6]">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <Link href="/signup" className="btn-lime">Join as Creator</Link>
      </div>
    </section>
  );
}
