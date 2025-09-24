import { useInView } from 'framer-motion';
import { cloneElement, useRef } from 'react';
import type { ReactElement, Ref } from 'react';

type LayoutEffectProps = {
  children: ReactElement;
  className?: string;
  isInviewState: {
    trueState?: string;
    falseState?: string;
  };
};

type ChildWithRef = ReactElement & {
  ref?: ((node: HTMLElement | null) => void) | { current: HTMLElement | null } | null;
};

export default function LayoutEffect({ children, className, isInviewState: { trueState = '', falseState = '' } }: LayoutEffectProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref as Ref<Element>, { once: true });

  const child = children as ChildWithRef;

  return cloneElement(child, {
    ref: (node: HTMLElement | null) => {
      (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      const childRef = child.ref;
      if (typeof childRef === 'function') {
        childRef(node);
      } else if (childRef && typeof childRef === 'object') {
        (childRef as { current: HTMLElement | null }).current = node;
      }
    },
    className: `${(child.props as any)?.className || ''} ${className || ''} ${isInView ? trueState : falseState}`.trim(),
  });
}
  