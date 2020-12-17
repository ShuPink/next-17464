import Link from "next/link";
import styles from './cards.module.scss'

export default function Cards() {
  return (
    <div className={styles.grid}>
      <Link href="/" passHref>
        <a className={styles.card}>
          <h3>Click Me</h3>
          <p>index.</p>
        </a>
      </Link>

      <Link href="/1" passHref>
        <a className={styles.card}>
          <h3>Click Me</h3>
          <p>1.</p>
        </a>
      </Link>

      <Link href="/2" passHref>
        <a className={styles.card}>
          <h3>Click Me</h3>
          <p>2.</p>
        </a>
      </Link>
    </div>
  );
}
