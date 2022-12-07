'use client';

import styles from './Modal.module.css';
import Link from 'next/Link';

type Props = {
  title: string;
  width?: number | string;
  height?: number | string;
};

const Modal: React.FC<React.PropsWithChildren & Props> = ({
  children,
  title,
  width = 500,
  height = 'auto'
}) => {
  return (
    <div className={styles.modal} style={{ height, width }}>
      <div className={styles['modal-title']}>{title}</div>
      <div className={styles['modal-body']}>{children}</div>

      <Link className={styles['back-button']} href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      </Link>
    </div>
  );
};

export default Modal;
