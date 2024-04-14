import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import "./CardHolder.css";

const CardList = () => {
  return (
    <>
      {Cardsdata.map((card) => {
        return (
          <div className="col-4 mt-3 card_holder" style={{}}>
            <Card
              className="card_wrapper"
              style={{ width: "100%", height: "100%", padding: "1rem" }}
              key={card.id}
            >
              <Card.Img
                variant="top"
                src={card.imgdata}
                style={{ height: "18rem" }}
              />
              <Card.Body>
                <Card.Title>{card.rname}</Card.Title>
                <Card.Text>Price: ₹ {card.price}</Card.Text>
                <Button
                  variant="warning"
                  style={{ fontWeight: "700" }}
                  className="buyBtn"
                >
                  Buy now
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default CardList;
