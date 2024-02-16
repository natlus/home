import Link from 'next/link';

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ children, href, onClick }: Props) => {
  const Component = href ? Link : 'button';

  return (
    <Component
      href={href || ''}
      onClick={onClick}
      className="relative inline-flex items-center p-2 text-inherit"
    >
      {children}
    </Component>
  );
};

export default Button;
