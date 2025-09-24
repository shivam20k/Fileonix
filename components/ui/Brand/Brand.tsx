import Image from 'next/image';
import type { ComponentProps } from 'react';

type BrandProps = Omit<ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height' | 'priority'> & {
  className?: string;
};

export default function Brand(props: BrandProps) {
  return (
    <Image
      src='/images/logo.png'
      alt='Brand logo'
      {...props}
      width={110}
      height={50}
      priority
    />
  );
}