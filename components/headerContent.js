import Link from "next/link";
import Data from "../Data/CarouselData";
import styles from "../styles/Header.module.scss";
import { FaStar, FaPlay, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HeaderContent = () => {
  return (
    <>
      <div className={styles.anime_container}>
        {Data.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: "20px" }}
              transition={{ duration: 0.9 }}
              key={item.id}
              className={styles.anime_content}
            >
              <h1>{item.title}</h1>
              <div className={styles.anime_category}>
                <p className={styles.anime_rating}>
                  <FaStar size={20} style={{ color: "#fbc94a" }} />
                  {item.rating}
                </p>
                <p>{item.category}</p>
              </div>
              <p>{item.description}</p>
              <div className={styles.anime_cta}>
                <Link href="/">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.anime_link}
                  >
                    <FaPlay />
                    Watch Now
                  </motion.a>
                </Link>
                <Link href="/">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.anime_bookmark}
                  >
                    <FaHeart />
                  </motion.a>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={styles.tabs_container}
      >
        <Link href="/">
          <a className={styles.tab_link}>Overview</a>
        </Link>
        <Link href="/">
          <a className={styles.tab_link}>Episodes</a>
        </Link>
        <Link href="/">
          <a className={styles.tab_link}>Details</a>
        </Link>
      </motion.div>
    </>
  );
};

export default HeaderContent;
