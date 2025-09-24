import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      role='button'
      {...props}
      className={`${props.className || ''} px-4 py-2.5 font-medium text-sm text-center duration-150`}
    >
      {children}
    </button>
  );
}