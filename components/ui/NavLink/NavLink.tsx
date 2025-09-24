import Link from 'next/link';
import type { ReactNode } from 'react';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & Record<string, unknown>;

export default function NavLink({ children, href, ...props }: NavLinkProps) {
  return (
    <Link href={href} {...props} className={`py-2.5 px-4 text-center rounded-full duration-150 ${props?.className || ''}`}>
      {children}
    </Link>
  );
}