import React, { useState } from "react";
import { Button, Table } from "reactstrap";
//import ModalExample from "./modal";
import {  Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const Showuser = (props) => {
  const userDetails = [
    {
      empId: 1,
      name: "Ravi Kumar",
      status: "Present",
      modal: {
        gender: "Male",
        email: "Ravi@gmail.com",
        mobile: "9877456122",
        address: "BBSR",
        username: "Ravi",
        password: "Ravi",
        documents: "",
        dateofjoin: "01/05/2018",
      },
    },
    {
      empId: 2,
      name: "Pranaya Kumar",
      status: "Present",
      modal: {
        gender: "Male",
        email: "Pranaya@gmail.com",
        mobile: "9877456122",
        address: "BBSR",
        username: "Ravi",
        password: "Ravi",
        documents: "",
        dateofjoin: "01/05/2018",
      },
    },
    {
      empId: 3,
      name: "Ankit Kumar",
      status: "Absent",
      modal: {
        gender: "Male",
        email: "Ankit@gmail.com",
        mobile: "9877456122",
        address: "BBSR",
        username: "Ravi",
        password: "Ravi",
        documents: "",
        dateofjoin: "01/05/2018",
      },
    },
  ];
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
const [dataFromChild,setDataFromChild] = useState(null);
const [displayModal,setdisplayModal] = useState(false);

  const handleShowDetails = (event) => {
      setShow(!show);
      setData({ data: event });
      setdisplayModal(!displayModal)
    };

  const handleCallback = (childData) => {
    //console.log(childData);
   setDataFromChild(childData);
  }
//console.log(dataFromChild);

const handleClick = () => {
  if(show && displayModal === true){
    setShow(false);
    setdisplayModal(false)
  }
  else{
    console.log("fail");
  }
}
  return (
    <div>
      <div className="border border-dark rounded ml-4 mr-4 mb-3">
        <div style={{ backgroundColor: "Gray", color: "white " }}>
          <h4>Waiter</h4>
        </div>
        <div>
          <Table responsive size="sm">
            <thead>
              <tr style={{ width: "30%" }}>
                <th>No.</th>
                <th>Waiter Name</th>
                <th>Attendance for Today</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((user, id) => (
                <tr>
                  <th scope="row">{user.empId}</th>
                  <td>{user.name}</td>
                  <td>{user.status}</td>
                  <td>
                    <Button
                      outline
                      color="primary"
                      onClick={() => handleShowDetails(user.modal)
                      }
                    >
                      Show Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        {/* {show ? <ModalExample Data={data.data} display={show} parentCallback={handleCallback}/> : null} */}
        {show ? (
        <div>
          <Modal isOpen={displayModal} toggle={displayModal}>
            <ModalHeader>User Details</ModalHeader>
              <ModalBody><div>{Object.entries(data.data).map((item,index) => (<ol key={index}>{item}</ol>))}</div></ModalBody>
            <ModalFooter>
            <Button color="primary">
            Edit
          </Button>{" "}
          <Button color="secondary" onClick={handleClick}>
            Cancel
          </Button>
            </ModalFooter>
          </Modal>
        </div>) : null}
      </div>
      <div className="border border-dark rounded ml-4 mr-4 mb-3">
        <div style={{ backgroundColor: "Gray", color: "white " }}>
          <h4>Billers</h4>
        </div>

        <div>
          <Table responsive size="sm">
            <thead>
              <tr>
                <th>No.</th>
                <th>User Name</th>
                <th>Attendance for Today</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Ranvijaya Rastogi</td>
                <td>Present</td>
                <td>{/* <ModalExample /> */}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Akhilesh Singh</td>
                <td>Absent</td>
                <td>{/* <ModalExample /> */}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Suresh Mishra</td>
                <td>Present</td>
                <td>{/* <ModalExample /> */}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div className="border border-dark rounded ml-4 mr-4 mb-3 ">
        <div style={{ backgroundColor: "Gray", color: "white " }}>
          <h4>Kichens</h4>
        </div>
        <div>
          <Table responsive size="sm">
            <thead>
              <tr>
                <th>No.</th>
                <th>User Name</th>
                <th>Attendance for Today</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Ruturaj Agrawal</td>
                <td>Present</td>
                <td>
                  <Button outline color="primary">
                    Show Details
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Aswin Panigrahi</td>
                <td>Present</td>
                <td>
                  <Button outline color="primary">
                    Show Details
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Ashish Sahoo</td>
                <td>Present</td>
                <td>
                  <Button outline color="primary">
                    Show Details
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div className="border border-dark rounded ml-4 mr-4 mb-3">
        <div style={{ backgroundColor: "Gray", color: "white " }}>
          <h4>Other Workers</h4>
        </div>
        <div>
          <Table responsive size="sm">
            <thead>
              <tr>
                <th>No.</th>
                <th>User Name</th>
                <th>Attendance for Today</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Rajesh kumar</td>
                <td>Present</td>
                <td>
                  <Button outline color="primary">
                    Show Details
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Juned Raj</td>
                <td>Present</td>
                <td>
                  <Button outline color="primary">
                    Show Details
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Satu Swain</td>
                <td>Present</td>
                <td>
                  <Button outline color="primary">
                    Show Details
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Showuser;
// import React from 'react'
// import { Button, Table } from 'reactstrap';
// const Showuser = () => {
//     return (
//         <div >
//         <div className="border border-dark rounded ml-4 mr-4 mb-3">
//             <div style={{ backgroundColor: "Gray", color: "white " }} ><h4>Waiter</h4></div>
//             <div>
//             <Table responsive size="sm">
//                 <thead >
//                     <tr style={{width: "30%"}}>
//                         <th>No.</th>
//                         <th>User Name</th>
//                         <th>Attendance for Today</th>
//                         <th>Details</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th scope="row">1</th>
//                         <td>Ravi Kumar</td>
//                         <td>Present</td>
//                         <td><Button outline color="primary">Show Details</Button></td>
//                     </tr>
//                     <tr>
//                         <th scope="row">2</th>
//                         <td>Pranaya Gulati</td>
//                         <td>Present</td>
//                         <td><Button outline color="primary">Show Details</Button></td>
//                     </tr>
//                     <tr>
//                         <th scope="row">3</th>
//                         <td>Ankur Tripathi</td>
//                         <td>Half-Day</td>
//                         <td><Button  outline color="primary">Show Details</Button></td>
//                     </tr>

//                 </tbody>

//             </Table>
//             </div>
//            </div>
//            <div className="border border-dark rounded ml-4 mr-4 mb-3">
//             <div style={{backgroundColor: "Gray", color: "white " }}><h4>Billers</h4></div>

//             <div>
//             <Table responsive size="sm">
//                 <thead>
//                     <tr>
//                         <th>No.</th>
//                         <th>User Name</th>
//                         <th>Attendance for Today</th>
//                         <th>Details</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th scope="row">1</th>
//                         <td>Ranvijaya Rastogi</td>
//                         <td>Present</td>
//                         <td><Button outline color="primary">Show Details</Button></td>
//                     </tr>
//                     <tr>
//                         <th scope="row">2</th>
//                         <td>Akhilesh Singh</td>
//                         <td>Absent</td>
//                         <td><Button outline color="primary">Show Details</Button></td>
//                     </tr>
//                     <tr>
//                         <th scope="row">3</th>
//                         <td>Suresh Mishra</td>
//                         <td>Present</td>
//                         <td><Button outline color="primary">Show Details</Button></td>
//                     </tr>
//                 </tbody>
//             </Table>
//             </div>
//             </div>

//             <div className="border border-dark rounded ml-4 mr-4 mb-3 ">
//             <div style={{backgroundColor: "Gray", color: "white " }}><h4>Kichens</h4></div>
//             <div >
//             <Table responsive size="sm">
//                 <thead>
//                     <tr>
//                         <th>No.</th>
//                         <th>User Name</th>
//                         <th>Attendance for Today</th>
//                         <th>Details</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th scope="row">1</th>
//                         <td>Ruturaj Agrawal</td>
//                         <td>Present</td>
//                         <td><Button outline color="primary">Show Details</Button></td>
//                     </tr>
//                     <tr>
//                         <th scope="row">2</th>
//                         <td>Aswin Panigrahi</td>
//                         <td>Present</td>
//                         <td><Button outline color="primary">Show Details</Button></td>
//                     </tr>
//                     <tr>
//                         <th scope="row">3</th>
//                         <td>Ashish Sahoo</td>
//                         <td>Present</td>
//                         <td><Button outline color="primary">Show Details</Button></td>
//                     </tr>
//                 </tbody>
//             </Table>
//             </div>
//             </div>

//             <div className="border border-dark rounded ml-4 mr-4 mb-3">
//             <div style={{ backgroundColor: "Gray", color: "white " }}><h4>Other Workers</h4></div>
//             <div >
//             <Table responsive size="sm">
//                 <thead>
//                     <tr>
//                         <th>No.</th>
//                         <th>User Name</th>
//                         <th>Attendance for Today</th>
//                         <th>Details</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th scope="row">1</th>
//                         <td>Rajesh kumar</td>
//                         <td>Present</td>
//                         <td><Button outline color="primary">Show Details</Button></td>
//                     </tr>
//                     <tr>
//                         <th scope="row">2</th>
//                         <td>Juned Raj</td>
//                         <td>Present</td>
//                         <td><Button outline color="primary">Show Details</Button></td>
//                     </tr>
//                     <tr>
//                         <th scope="row">3</th>
//                         <td>Satu Swain</td>
//                         <td>Present</td>
//                         <td><Button outline color="primary">Show Details</Button></td>
//                     </tr>
//                 </tbody>
//             </Table>
//             </div>
//             </div>
//             </div>

//     )
// }

// export default Showuser
