import { Building2, Camera, Megaphone, Monitor, Palette, Smartphone } from 'lucide-react';

const cats = [['Design', Palette], ['Development', Smartphone], ['IT & Software', Monitor], ['Business', Building2], ['Marketing', Megaphone], ['Photography', Camera]];

export default function Categories() {
  return (
    <section id="categories" className="scroll-mt-4 bg-white pb-16 md:pb-24">
      <div className="container-x">
        <div className="mx-auto max-w-[917px] text-center">
          <h2 className="h-display text-[28px] text-vulcan-950 md:text-4xl">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="mt-4 text-lg leading-[1.6] text-shuttle-400">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.</p>
        </div>
        <ul className="mt-16 flex flex-wrap justify-center gap-6 lg:gap-10">
          {cats.map(([name, Icon]) => (
            <li key={name}>
              <a href="#courses" className="flex h-[167px] w-[167px] flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-200 transition hover:border-persian-800">
                <span className="grid h-[60px] w-[60px] place-items-center rounded-full bg-lime-400"><Icon className="h-8 w-8" /></span>
                <span className="text-xl font-medium">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
