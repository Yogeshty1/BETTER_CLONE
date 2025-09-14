import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>BetterClone</a>
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/about-us" legacyBehavior><a>About Us</a></Link>
          </li>
          <li>
            <Link href="/mortgage-calculator" legacyBehavior><a>Mortgage Calculator</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
