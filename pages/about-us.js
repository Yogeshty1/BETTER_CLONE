import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us - BetterClone</title>
        <meta name="description" content="Learn more about our mission and team." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Our mission is to make homeownership simpler, faster, and more accessible for everyone.
        </p>

        <section className={styles.section}>
          <h2>Our Journey</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3>2023 - The Idea</h3>
              <p>BetterClone was born from a desire to simplify the complex world of mortgages.</p>
            </div>
            <div className={styles.timelineItem}>
              <h3>2024 - The Launch</h3>
              <p>We launched our platform to a small group of beta testers, gathering feedback and iterating.</p>
            </div>
            <div className={styles.timelineItem}>
              <h3>Today - The Mission Continues</h3>
              <p>We are continuously working to improve the home buying experience for our users.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Our Values</h2>
          <ul className={styles.valuesList}>
            <li>Customer-first approach</li>
            <li>Transparency in all things</li>
            <li>Innovation that matters</li>
            <li>Building a team of experts</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
