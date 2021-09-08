import { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { Modal, Button } from "react-bootstrap";

function Addmovie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const name = useRef();
  const image = useRef();
  const desc = useRef();
  const rate = useRef();
  const handelAdd = () => {
    if (
      name.current.value &&
      image.current.value &&
      desc.current.value &&
      rate.current.value
    ) {
      const obj = {
        title: name.current.value,
        description: desc.current.value,
        rating: rate.current.value,
        posterURL: image.current.value,
      };
      // console.log(obj);
      props.fnhandleAddMovie(obj);
      handleClose();
    } else {
      alert("check inputs");
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="input">Title:</label>
          <input type="text" ref={name} /> <hr />
          <label className="input">Image:</label>
          <input type="text" ref={image} />
          <hr />
          <label className="input">Rating:</label>
          <input type="text" ref={rate} />
          <hr />
          <label className="input">Description:</label>
          <input type="text" ref={desc} />
          <hr />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Addmovie;
