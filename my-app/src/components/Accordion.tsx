'use client';

import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string | ReactNode;
  defaultOpen?: boolean;
}

export const Accordion = (props: Props) => {
  const {
    children,
    className = '',
    label,
    defaultOpen = false,
    ...legacy
  } = props;
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (open) {
      timerRef.current = setTimeout(() => {
        ref.current?.classList.remove('overflow-y-hidden');
        ref.current?.classList.add('overflow-y-visible');
      }, 200);
    } else {
      clearTimeout(timerRef.current);
      ref.current?.classList.remove('overflow-y-visible');
      ref.current?.classList.add('overflow-y-hidden');
    }
  }, [open]);
  return (
    <div {...legacy} className={`${className} flex flex-col`}>
      <button
        type="button"
        onClick={handleToggle}
        className="w-full text-center text-xl font-bold"
      >
        {label}
      </button>
      <div
        className={`${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} grid w-full transition-all duration-200`}
      >
        <div ref={ref} className="w-full overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
