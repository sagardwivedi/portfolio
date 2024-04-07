import { Logo } from '@/components/ui/logo';
import { navs } from '@/lib/constantData';
import ActiveLink from './ActiveLink';
import { HeaderMobile } from './HeaderMobile';

export function Header() {
  return (
    <header className="mb-6 flex flex-row items-center justify-between px-5 py-4">
      <Logo className="max-md:text-2xl" />
      <div className="flex flex-row gap-4 max-md:hidden">
        {navs.map((nav, index) => (
          <ActiveLink href={nav.href} text={nav.text} key={index} />
        ))}
      </div>
      <div />
      <HeaderMobile />
    </header>
  );
}
