import styles from "../styles/Trending.module.scss";

const Cards = ({ title, category, rating, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="Anime Cover" />
      <div className={styles.desc}>
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default Cards;
