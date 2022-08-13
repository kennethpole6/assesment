import styles from "../styles/Header.module.scss";
import Data from "../Data/EpisodeData";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
const Episodes = () => {
  return (
    <>
      <h1 className={styles.episodes_header}>
        Trending <span>this week</span>
      </h1>
      <div className={styles.episodes_container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={styles.episodes_anime_info}
        >
          <img src="images/aot_cover.jpg" alt="anime cover" />
          <div className={styles.episodes_desc}>
            <h3>Attack on Titan</h3>
            <div className={styles.episodes_sub_desc}>
              <p>Category: Adventure fiction, Dark fantasy, Martial Arts</p>
              <p>
                <FaStar style={{ color: "#fbc94a" }} /> 5
              </p>
            </div>
          </div>
          <p>
            When man-eating Titans first appeared 100 years ago, humans found
            safety behind massive walls that stopped the giants in their tracks.
            But the safety they have had for so long is threatened when a
            colossal Titan smashes through the barriers, causing a flood of the
            giants into what had been the human…
          </p>
        </motion.div>
        <div>
          <div className={styles.episodes_anime_tabs}>
            <h2>Episodes</h2>
            <p>Season 1</p>
          </div>

          {Data.map((item) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className={styles.episodes_cards}
                key={item.id}
              >
                <img src={item.image} alt="episode thumbnail" />
                <div>
                  <h3>{item.episode}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Episodes;
