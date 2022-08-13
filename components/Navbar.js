import styles from "../styles/Navbar.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.navbar_logo}
      >
        <Link href="/">Anime Binge</Link>
      </motion.div>
      <div className={styles.navbar_links_container}>
        <Link href="/">
          <a className={styles.navbar_links}>Home</a>
        </Link>
        <Link href="/Discover">
          <a className={styles.navbar_links}>Discover</a>
        </Link>
        <Link href="/">
          <a className={styles.navbar_links}>About Us</a>
        </Link>
        <Link href="/">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.navbar_cta_signup}
          >
            Sign Up
          </motion.a>
        </Link>
        <Link href="/">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.navbar_cta_signin}
          >
            Sign In
          </motion.a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
