import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const userDetails = [
   {
      id: 1,
      name: "Ravi Kumar",
      gender: "Male",
      email: "Ravi@gmail.com",
      mobile: "9877456122",
      address: "BBSR",
      username: "Ravi",
      password: "Ravi",
      documents: "",
      dateofjoin: "01/05/2018"
   },
   {
      id:2,
      name:"Pranaya Kumar",
      gender:"Male",
      email:"Ravi@gmail.com",
      mobile:"9877456122",
      address:"BBSR",
      username:"Ravi",
      password:"Ravi",
      documents:"",
      dateofjoin:"01/05/2018"
    }
  ]

  const userList = userDetails.find(Detail => 
    Detail.name === "Ravi Kumar"
      );
//console.log(userList)
console.log(props.USERNAME)
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Button outline color="primary" onClick={toggle}>Show Details</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>User Details</ModalHeader>
        <ModalBody>
               <div>{props.USERNAME === userList.name ? (<div>{Object.entries(userList).map((item,index) => (<ol key={index}>{item}</ol>))}</div>) : (<h2>failure</h2>)}</div> 
               <div>{console.log(props.USERNAME)}</div> 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Edit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;