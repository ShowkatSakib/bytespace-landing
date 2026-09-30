import Link from 'next/link';
import Logo from './Logo';
import NewsletterForm from './NewsletterForm';
import { footerLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-shuttle-200 bg-white pt-[70px]">
      <div className="container-x">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[92px]">
          <div className="flex w-full max-w-[528px] flex-col gap-6">
            <Logo dark />
            <p className="text-sm leading-[1.6]">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <NewsletterForm />
            <p className="max-w-[504px] text-xs leading-[1.6]">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:max-w-[580px]">
            {footerLinks.map(([title, links], i) => (
              <div key={i} className="flex flex-col gap-4">
                <h2 className="mb-2 h-6 text-base">{title}</h2>
                {links.map((l) => (<Link key={l} href="#" className="text-sm leading-[1.6] hover:underline">{l}</Link>))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-shuttle-200 py-6 text-xs sm:flex-row">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
