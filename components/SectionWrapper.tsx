import type { HTMLAttributes, ReactNode } from 'react';

type SectionWrapperProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export default function SectionWrapper({ children, ...props }: SectionWrapperProps) {
  return (
    <section {...props} className={`py-16 lg:py-24 ${props.className || ''}`}>
      {children}
    </section>
  );
}