import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BetterClone - Home</title>
        <meta name="description" content="A clone of Better.com for educational purposes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            A better way to home ownership
          </h1>
          <p className={styles.description}>
            Get pre-approved in minutes and close on your new home with confidence.
          </p>
          <Link href="/mortgage-calculator" legacyBehavior>
            <a className={styles.cta}>Get Started</a>
          </Link>
        </section>

        <section className={styles.features}>
          <div className={styles.card}>
            <h3>Mortgage</h3>
            <p>Find the right mortgage for your new home.</p>
          </div>
          <div className={styles.card}>
            <h3>Refinance</h3>
            <p>Lower your monthly payment or cash out equity.</p>
          </div>
          <div className={styles.card}>
            <h3>HELOC</h3>
            <p>A flexible line of credit for your financial goals.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
