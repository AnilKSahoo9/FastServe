import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [display,setDisplay] = useState(props.display);

  const toggle = () => {setModal(!modal);
      if(display && modal === true) {
      setDisplay(false);
      setModal(false);
  }
  else{
  console.log("uiiiii")
  }
};

//console.log(modal)
//props.parentCallback(modal);
  //console.log(props.Data);
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={modal} toggle={display} className={className}>
        <ModalHeader toggle={display}>User Details</ModalHeader>
        <ModalBody>
          <div>{Object.entries(props.Data).map((item,index) => (<ol key={index}>{item}</ol>))}</div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Edit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
