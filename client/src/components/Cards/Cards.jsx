import styles from "./Cards.module.css";
import CardList from "./CardList";

const Cards = () => {
  return (
    <div className={`${styles.card_wrapper} container text-center`}>
      <div className="row">
        <div className="col-12">
          <p
            className={`${styles.welcome_title}`}
            style={{ paddingTop: "2rem" }}
          >
            Buy Items
          </p>
        </div>

        <CardList></CardList>
      </div>
    </div>
  );
};

export default Cards;
