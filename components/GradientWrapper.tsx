import type { HTMLAttributes, ReactNode } from 'react';

type GradientWrapperProps = HTMLAttributes<HTMLDivElement> & {
  wrapperClassName?: string;
  children: ReactNode;
};

export default function GradientWrapper({ children, ...props }: GradientWrapperProps) {
  return (
    <div {...props} className={`relative ${props.className || ''}`}>
      <div
        className={`absolute m-auto blur-[160px] ${props.wrapperClassName || ''}`}
        style={{
          background:
            'linear-gradient(180deg, #7C3AED 100%, rgba(152, 103, 240, 0.984375) 100%, rgba(237, 78, 80, 0.2) 100%)',
        }}
      ></div>
      <div className='relative'>{children}</div>
    </div>
  );
}