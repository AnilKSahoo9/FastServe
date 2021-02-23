import React, { useState } from "react";
import { Button, Table } from "reactstrap";
import ModalExample from "./modal";
const Showuser = (props) => {
  //   const [UN, setUN] = useState("Ravi Kumar");
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

  const handleShowDetails = (event) => {
    setShow(true);
    setData({ data: event });
    console.log("event");
    // return <ModalExample props={event} />;
  };
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
                      onClick={() => handleShowDetails(user.modal)}
                    >
                      Show Details
                    </Button>
                  </td>
                  {/* {show ? <ModalExample props={user.modal} /> : null} */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        {show ? <ModalExample props={data.data} /> : null}
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
