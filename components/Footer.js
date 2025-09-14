import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} BetterClone. All rights reserved.</p>
        <p>A project for educational purposes.</p>
      </div>
    </footer>
  );
};

export default Footer;
