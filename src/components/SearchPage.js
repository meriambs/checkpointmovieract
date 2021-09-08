import React, { Component, useRef } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

function SearchPage(props) {
  const input = useRef();
  return (
    <InputGroup className="mb-3 " style={{ width: 400, marginLeft: "35%" }}>
      <FormControl
        ref={input}
        placeholder="Search here"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={() => props.fnHandelClick(input.current.value)}
      />
      <Button variant="btn btn-dark" id="button-addon2">
        Search
      </Button>
    </InputGroup>
  );
}

export default SearchPage;
