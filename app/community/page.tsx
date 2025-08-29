import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import styles from './page.module.scss';

export default function CommunityPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          One shared passion: <span className={styles.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={styles.main}>
        <h2>Community Perks</h2>

        <ul className={styles.perks}>
          <li>
            <Image src={mealIcon as StaticImageData} alt="A delicious meal" />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image
              src={communityIcon as StaticImageData}
              alt="A crowd of people, cooking"
            />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src={eventsIcon as StaticImageData}
              alt="A crowd of people at a cooking event"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}