import React, { useState } from "react";
import { Button, Table } from "reactstrap";
//import ModalExample from "./modal";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const ShowEmployee = (props) => {
  const userDetails = [
    {
      empId: 1,
      name: "Ravi Kumar",
      status: "Present",
      modal: {
        Gender: "Male",
        Email: "Ravi@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Ravi",
        Password: "Ravi",
        Documents: "",
        Dateofjoin: "01/05/2018",
      },
    },
    {
      empId: 2,
      name: "Pranaya Kumar",
      status: "Present",
      modal: {
        Gender: "Male",
        Email: "Pranaya@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Pranaya",
        Password: "Pranaya",
        Documents: "",
        Dateofjoin: "17/05/2018",
      },
    },
    {
      empId: 3,
      name: "Ankit Kumar",
      status: "Absent",
      modal: {
        Gender: "Male",
        Email: "Ankit@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Ankit ",
        Password: "Ankit ",
        Documents: "",
        Dateofjoin: "18/05/2018",
      },
    },
  ];
  const billerDetails = [
    {
      empId: 1,
      name: "Ranvijaya Rastogi",
      status: "Present",
      modal: {
        Gender: "Male",
        Email: "Ranvijaya@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Ranvijaya",
        Password: "Ranvijaya",
        Documents: "",
        Dateofjoin: "20/05/2018",
      },
    },
    {
      empId: 2,
      name: "Akhilesh Singh",
      status: "Present",
      modal: {
        Gender: "Male",
        Email: "Akhilesh@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Akhilesh",
        Password: "Akhilesh",
        Documents: "",
        Dateofjoin: "01/10/2018",
      },
    },
    {
      empId: 3,
      name: "Suresh Mishra",
      status: "Absent",
      modal: {
        Gender: "Male",
        Email: "Suresh@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Suresh",
        Password: "Suresh",
        Documents: "",
        Dateofjoin: "01/05/2018",
      },
    },
  ];

  const chefDetails = [
    {
      empId: 1,
      name: "Ruturaj Agrawal	",
      status: "Present",
      modal: {
        Gender: "Male",
        Email: "Ranvijaya@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Ranvijaya",
        Password: "Ranvijaya",
        Documents: "",
        Dateofjoin: "20/05/2018",
      },
    },
    {
      empId: 2,
      name: "Akhilesh Singh",
      status: "Present",
      modal: {
        Gender: "Male",
        Email: "Akhilesh@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Akhilesh",
        Password: "Akhilesh",
        Documents: "",
        Dateofjoin: "01/10/2018",
      },
    },
    {
      empId: 3,
      name: "Suresh Mishra",
      status: "Absent",
      modal: {
        Gender: "Male",
        Email: "Suresh@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Suresh",
        Password: "Suresh",
        Documents: "",
        Dateofjoin: "01/05/2018",
      },
    },
  ];

  const workerDetails = [
    {
      empId: 1,
      name: "Rajesh kumar",
      status: "Present",
      modal: {
        Gender: "Male",
        Email: "Rajesh@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Rajesh",
        Password: "Rajesh",
        Documents: "",
        Dateofjoin: "20/05/2018",
      },
    },
    {
      empId: 2,
      name: "Juned Raj",
      status: "Present",
      modal: {
        Gender: "Male",
        Email: "Juned@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Juned",
        Password: "Juned",
        Documents: "",
        Dateofjoin: "01/10/2018",
      },
    },
    {
      empId: 3,
      name: "Satu Swain",
      status: "Absent",
      modal: {
        Gender: "Male",
        Email: "Satu@gmail.com",
        Mobile: "9877456122",
        Address: "BBSR",
        Username: "Satu",
        Password: "Satu",
        Documents: "",
        Dateofjoin: "01/05/2018",
      },
    },
  ];



  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [dataFromChild, setDataFromChild] = useState(null);
  const [displayModal, setdisplayModal] = useState(false);

  const handleShowDetails = (event) => {
    setShow(!show);
    setData({ data: event });
    setdisplayModal(!displayModal);
  };

  // const handleCallback = (childData) => {
  //   //console.log(childData);
  //   setDataFromChild(childData);
  // };
  //console.log(dataFromChild);

  const handleClick = () => {
    // show && displayModal && {setShow(false),setdisplayModal(false)}

    if (show && displayModal === true) {
      setShow(false);
      setdisplayModal(false);
    } else {
      console.log("fail");
    }
  };
  return (
    <div className="inner-container " style={{ width: "80%",margin:"3rem",marginLeft:"10%" }}>
      <div className="ml-4 mr-4 mb-3 mt-4" style={{fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    }} >
        <div style={{ backgroundColor: "lightgray", color: "black"}}>
          <h4>Waiter</h4>
        </div>
        <div>
          <Table responsive size="sm">
            <thead>
              <tr style={{ width: "30%" }}>
                <th>No.</th>
                <th>Waiter Name </th>
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


      <div className="ml-4 mr-4 mb-3 mt-4" style={{fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    }} >
        <div style={{ backgroundColor: "lightgray", color: "black"}}>
          <h4>Billers</h4>
        </div>
        <div>
          <Table responsive size="sm">
            <thead>
              <tr style={{ width: "30%" }}>
                <th>No.</th>
                <th>Billers Name</th>
                <th>Attendance for Today</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
            {billerDetails.map((biller, id) => (
              <tr>
                <th scope="row">{biller.empId}</th>
                <td>{biller.name}</td>
                <td>{biller.status}</td>
                <td><Button
                      outline
                      color="primary"
                      onClick={() => handleShowDetails(biller.modal)
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

      <div className="ml-4 mr-4 mb-3 mt-4 " 
       style={{fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    }} >
        <div style={{ backgroundColor: "lightgray", color: "black"}}>
          <h4>Kichens</h4>
        </div>
        <div>
          <Table responsive size="sm">
            <thead>
              <tr>
                <th>No.</th>
                <th>Chefstaff Name</th>
                <th>Attendance for Today</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
            {chefDetails.map((chef, id) => (
              <tr>
                <th scope="row">{chef.empId}</th>
                <td>{chef.name}</td>
                <td>{chef.status}</td>
                <td><Button
                      outline
                      color="primary"
                      onClick={() => handleShowDetails(chef.modal)
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

      <div className="ml-4 mr-4 mb-3 mt-4 " 
       style={{fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    }} >
        <div style={{ backgroundColor: "lightgray", color: "black"}}>
          <h4>Other Workers</h4>
          </div>
        <div>
          <Table responsive size="sm">
            <thead>
              <tr>
                <th>No.</th>
                <th>Worker Name</th>
                <th>Attendance for Today</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
            {workerDetails.map((worker, id) => (
              <tr>
                <th scope="row">{worker.empId}</th>
                <td>{worker.name}</td>
                <td>{worker.status}</td>
                <td><Button
                      outline
                      color="primary"
                      onClick={() => handleShowDetails(worker.modal)
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
      </div>
    
  );
};

export default ShowEmployee;
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
