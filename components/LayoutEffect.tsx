import { useInView } from 'framer-motion';
import { cloneElement, useRef } from 'react';
import type { ReactElement } from 'react';

type LayoutEffectProps = {
  children: ReactElement;
  className?: string;
  isInviewState: {
    trueState?: string;
    falseState?: string;
  };
};

type ChildWithRef = ReactElement & {
  ref?: ((node: Element | null) => void) | { current: Element | null } | null;
};

export default function LayoutEffect({ children, className, isInviewState: { trueState = '', falseState = '' } }: LayoutEffectProps) {
  const ref = useRef<Element | null>(null);
  const isInView = useInView(ref as unknown as React.RefObject<Element>, { once: true });

  const child = children as ChildWithRef;

  return cloneElement(child, {
    ref: (node: Element | null) => {
      (ref as React.MutableRefObject<Element | null>).current = node;
      const childRef = child.ref;
      if (typeof childRef === 'function') {
        childRef(node);
      } else if (childRef && typeof childRef === 'object') {
        (childRef as { current: Element | null }).current = node;
      }
    },
    className: `${(child.props as any)?.className || ''} ${className || ''} ${isInView ? trueState : falseState}`.trim(),
  } as any);
}
  