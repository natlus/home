import styles from './sky.module.css';
import cn from 'classnames';

function rand(max: number = 2000) {
  return Math.floor(Math.random() * (max - 1) + 1);
}

function createStars(n: number) {
  const values = [...new Array(n)];
  return values.map(() => `${rand()}px ${rand()}px 1px rgba(255,255,255,0.45)`);
}

const Sky = ({ children }: { children?: React.ReactNode }) => {
  const starsSmall = createStars(300);
  const starsMedium = createStars(150);
  const starsLarge = createStars(20);

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
      {[...new Array(rand(10))].map((_, index) => (
        <div
          key={`sky-${index}`}
          className={cn(styles.shootingStar, Math.random() > 0.5 ? styles.left : styles.right)}
          style={{
            animationDelay: `${rand(10000)}s`,
            top: `${Math.random() > 0.5 ? '-' : '+'}${rand(500)}px`
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default Sky;
