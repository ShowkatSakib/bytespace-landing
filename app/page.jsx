import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import CourseBrowser from '@/components/CourseBrowser';
import Categories from '@/components/Categories';
import Growth from '@/components/Growth';
import CreatorCTA from '@/components/CreatorCTA';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <CourseBrowser />
      <Categories />
      <Growth />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
