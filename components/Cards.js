import { FaStar } from "react-icons/fa";
import styles from "../styles/Trending.module.scss";

const Cards = ({ title, category, rating, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="Anime Cover" />
      <div className={styles.desc}>
        <h3>{title}</h3>
        <div className={styles.sub_desc}>
          <p>{category}</p>
          <p>
            <FaStar style={{ color: "#fbc94a" }} /> {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
