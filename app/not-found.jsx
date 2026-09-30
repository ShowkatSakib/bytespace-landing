import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <section className="relative overflow-hidden bg-persian-800 pb-24 text-center text-white">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <Header />
        <div className="container-x relative">
          <p aria-hidden="true" className="bg-gradient-to-b from-lime-400 via-lime-400/80 to-transparent bg-clip-text font-heading text-[40vw] font-semibold leading-none tracking-[-0.01em] text-transparent md:text-[300px] lg:text-[480px]">404</p>
          <div className="-mt-[6vw] flex flex-col items-center gap-8 md:-mt-24 lg:-mt-[110px]">
            <h1 className="h-display max-w-[935px] text-[36px] md:text-[72px]">The page you are looking for doesn&apos;t exist</h1>
            <p className="text-lg text-shuttle-100">Try to use a correct url or go back to homepage to start again</p>
            <Link href="/" className="btn-lime">Back to Home</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
