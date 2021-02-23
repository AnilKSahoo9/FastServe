import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);
  // const userDetails = [
  //  {
  //     id: 1,
  //     name: "Ravi Kumar",
  //     gender: "Male",
  //     email: "Ravi@gmail.com",
  //     mobile: "9877456122",
  //     address: "BBSR",
  //     username: "Ravi",
  //     password: "Ravi",
  //     documents: "",
  //     dateofjoin: "01/05/2018"
  //  },
  //  {
  //     id:2,
  //     name:"Pranaya Kumar",
  //     gender:"Male",
  //     email:"Ravi@gmail.com",
  //     mobile:"9877456122",
  //     address:"BBSR",
  //     username:"Ravi",
  //     password:"Ravi",
  //     documents:"",
  //     dateofjoin:"01/05/2018"
  //   }
  // ]

  // const userList = userDetails.find(Detail =>
  //   Detail.name === "Ravi Kumar"
  //     );
  //console.log(userList)
  console.log(props);
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>User Details</ModalHeader>
        <ModalBody>
          <div>{props.gender}</div>
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
