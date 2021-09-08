import React , {useEffect}from 'react'
import { useParams, useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Trailer = (props) => {
    console.log("props",props)
      const { movieId } = useParams();
     
     
      const chosenMovie = props.movis&&props.movis.find(movie => {
     

        return movie.id==movieId});
   
      const history = useHistory();
      const handleHistory = () => history.push('/');
    return (
        <div className="detail-cont">
        <Button variant="dark" onClick={() => handleHistory()}>Go back home</Button>
        <div style={{ width: "50%", textAlign: "center" }}>
            <h2>{chosenMovie&&chosenMovie.title}</h2>
            <p><span style={{ fontWeight: "700", fontSize: "1.5em" }}> Synopsis :</span> <br /> {chosenMovie&&chosenMovie.description}</p>
        </div>
        </div>
    )
}

export default Trailer
