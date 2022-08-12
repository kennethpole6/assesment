import styles from "../styles/Trending.module.scss";
import Card from "./Cards";
import Data from "./Data";
const Trending = () => {
  return (
    <>
      <div className={styles.trending_container}>
        <h1>
          Trending <span> this week</span>
        </h1>
        <div className={styles.card_container}>
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
        </div>
      </div>
    </>
  );
};

export default Trending;
