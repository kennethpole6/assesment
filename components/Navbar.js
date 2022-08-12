import React from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link href="/">Anime Binge</Link>
      </div>
      <div className={styles.navbar_links_container}>
        <Link href="/">
          <a className={styles.navbar_links}>Home</a>
        </Link>
        <Link href="/">
          <a className={styles.navbar_links}>Discover</a>
        </Link>
        <Link href="/">
          <a className={styles.navbar_links}>About Us</a>
        </Link>
        <Link href="/">
          <a className={styles.navbar_cta_signup}>Sign Up</a>
        </Link>
        <Link href="/">
          <a className={styles.navbar_cta_signin}>Sign In</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
