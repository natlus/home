import { useState, useEffect, RefObject } from 'react';
import { v4 as uuid } from 'uuid';

import Link from 'next/link';
import { useMouse } from '@uidotdev/usehooks';

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  square?: boolean;
};

const gradientBorder =
  'after:opacity-0 after:absolute after:z-[-1] after:left-[-2px] after:block after:h-[calc(100%+4px)] after:w-[calc(100%+4px)] after:rounded-full after:transition-opacity';

const Button = ({ children, href, onClick, square = false }: Props) => {
  const [id, setId] = useState<string>('');

  useEffect(() => {
    setId(uuid().replace(/[0-9]/g, ''));
  }, []);

  const [mouse, ref] = useMouse();

  const xIntersecting = mouse.elementX > 0 && mouse.elementX < ref.current.clientWidth;
  const yIntersecting = mouse.elementY > 0 && mouse.elementY < ref.current.clientHeight;
  const isIntersecting = xIntersecting && yIntersecting;

  const Component = href ? Link : 'button';

  const deg = isIntersecting
    ? Math.atan2(
        mouse.elementY - ref.current.clientHeight / 2,
        mouse.elementX - ref.current.clientWidth / 2
      ) *
      (180 / Math.PI)
    : 0;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .${id}::after {
            background: linear-gradient(${deg}deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
          }
        `
        }}
      />

      <Component
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={ref as RefObject<HTMLButtonElement | HTMLAnchorElement>}
        href={href || ''}
        onClick={onClick}
        className={`${id} relative inline-flex items-center rounded-full bg-[rgba(0,0,0,0.8)] text-inherit shadow-btn hover:after:opacity-[1] ${gradientBorder} ${square ? 'p-2' : 'px-6 py-2'}`}
      >
        {children}
      </Component>
    </>
  );
};

export default Button;
