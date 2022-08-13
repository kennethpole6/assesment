import styles from "../styles/Trending.module.scss";
import Card from "./Cards";
import Data from "../Data/Data";
import { motion } from "framer-motion";
const Trending = () => {
  return (
    <>
      <div className={styles.trending_container}>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "10px" }}>
          Trending <span> this week</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={styles.card_container}
        >
          {Data.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                category={item.category}
                rating={item.rating}
                image={item.image}
              />
            );
          })}
        </motion.div>
        <div className={styles.throwback_container}>
          <motion.h1 initial={{ x: 0 }} animate={{ x: "10px" }}>
            Throwback Anime!
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.throwback_lists}
          >
            <div className={styles.throwback_anime_lists}>
              <img src="images/throwback_1.svg" alt="Throwback Anime 1" />
            </div>
            <div className={styles.throwback_anime_lists}>
              <img src="images/throwback_2.svg" alt="Throwback Anime 2" />
            </div>
            <div className={styles.throwback_anime_lists}>
              <img src="images/throwback_3.svg" alt="Throwback Anime 3" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Trending;
