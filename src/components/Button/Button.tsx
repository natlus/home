import cn from 'classnames';
import styles from './Button.module.css';
import Link from 'next/link';

type Props = {
  href?: string;
  onClick?: () => void;
};

const Button: React.FC<React.PropsWithChildren & Props> = ({ children, href, onClick }) => {
  const Component = href ? Link : 'button';

  return (
    <Component href={href || ''} onClick={onClick} className={cn(styles.btn)}>
      {children}
    </Component>
  );
};

export default Button;
