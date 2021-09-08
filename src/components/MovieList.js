import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

const MovieList = ({ movies }) => {
  useEffect(() => {
    console.log(movies);
  }, [movies]);
  return (
    <Container>
      <Row>
        {movies
          ? movies.map((item, key) => (
              <Col md={4} className="mb-4" key={key}>
                <MovieCard item={item} />
              </Col>
            ))
          : ""}
      </Row>
    </Container>
  );
};
export default MovieList;
