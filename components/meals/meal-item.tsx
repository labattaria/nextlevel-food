import Link from 'next/link';
import Image from 'next/image';
import styles from './meal-item.module.scss';
import type { MealItemProps } from './types';

export default function MealItem({ title, slug, image, summary, creator }: MealItemProps) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image
            src={`https://labattaria-nextjs-demo-users-image.s3.eu-north-1.amazonaws.com/${image}`}
            alt={title}
            fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}