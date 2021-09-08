import { Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import {Link} from "react-router-dom"
const MovieCard = ({ item }) => {
  return (
    <div style={{ textAlign: "center", width: 300 }}>
      <Card>
        <Card.Img
          variant="top"
          src={item.posterURL}
          style={{ width: "100%", height: "100%" }}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Rating
            initialRating={item.rating}
            emptySymbol={[
              "far fa-star fa-2x low",
              "far fa-star fa-2x low",
              "far fa-star fa-2x medium",
              "far fa-star fa-2x medium",
              "far fa-star fa-2x high",
              "far fa-star fa-2x high",
            ]}
            fullSymbol={[
              "fa fa-star fa-2x low",
              "fa fa-star fa-2x low",
              "fa fa-star fa-2x medium",
              "fa fa-star fa-2x medium",
              "fa fa-star fa-2x high",
              "fa fa-star fa-2x high",
            ]}
            stop={6}
            readonly
          />
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
       
        <Link  to={`/${item.id}`} ><button>desc</button></Link>
      </Card>
    </div>
  );
};

export default MovieCard;
