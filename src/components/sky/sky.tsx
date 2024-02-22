import styles from './sky.module.css';
import cn from 'classnames';

function rand() {
  return Math.floor(Math.random() * (2000 - 1) + 1);
}

function createStars(n: number) {
  const values = [...new Array(n)];
  return values.map(() => `${rand()}px ${rand()}px 1px rgba(255,255,255,0.45)`);
}

const Sky: React.FC<React.PropsWithChildren> = ({ children }) => {
  const starsSmall = createStars(500);
  const starsMedium = createStars(200);
  const starsLarge = createStars(50);

  return (
    <div className={styles.skybox}>
      <div
        className={cn(styles.starset, styles.small)}
        style={{ boxShadow: starsSmall.join(',') }}
      />
      <div
        className={cn(styles.starset, styles.medium)}
        style={{ boxShadow: starsMedium.join(',') }}
      />
      <div
        className={cn(styles.starset, styles.large)}
        style={{ boxShadow: starsLarge.join(',') }}
      />
      {children}
    </div>
  );
};

export default Sky;
