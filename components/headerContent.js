import Link from "next/link";
import Data from "./CarouselData";
import styles from "../styles/Header.module.scss";
import { FaStar, FaPlay, FaHeart } from "react-icons/fa";

const HeaderContent = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <>
      <div className={styles.anime_container}>
        {Data.map((item) => {
          return (
            <div key={item.id} className={styles.anime_content}>
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
                  <a className={styles.anime_link}>
                    <FaPlay />
                    Watch Now
                  </a>
                </Link>
                <Link href="/">
                  <a className={styles.anime_bookmark}>
                    <FaHeart />
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.tabs_container}>
        <Link href="/">
          <a className={styles.tab_link}>Overview</a>
        </Link>
        <Link href="/">
          <a className={styles.tab_link}>Episodes</a>
        </Link>
        <Link href="/">
          <a className={styles.tab_link}>Details</a>
        </Link>
      </div>
    </>
  );
};

export default HeaderContent;
