import React, { useState } from "react";
import { Button, Table } from "reactstrap";
import { userDetails, billerDetails, chefDetails, workerDetails } from "../../StaticData/showemployeeData"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../css/showemployee.css";
const ShowEmployee = (props) => {
 
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
    <div className="inner-container1 ">
      <div className="showemp ml-4 mr-4 mb-3 mt-4"  >
        <div className="showline">
          <h4>Waiter</h4>
        </div>
        <div>
          <Table responsive size="sm">
            <thead>
              <tr className="tr">
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
              <ModalBody><div>{Object.entries(data.data).map((item, index) => (<ol key={index}>{item}</ol>))}</div></ModalBody>
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


      <div className="showemp ml-4 mr-4 mb-3 mt-4"  >
        <div className="showline">
          <h4>Billers</h4>
        </div>
        <div>
          <Table responsive size="sm">
            <thead>
              <tr className="tr">
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
              <ModalBody><div>{Object.entries(data.data).map((item, index) => (<ol key={index}>{item}</ol>))}</div></ModalBody>
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

      <div className="showemp ml-4 mr-4 mb-3 mt-4 " >
        <div className="showline">
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
              <ModalBody><div>{Object.entries(data.data).map((item, index) => (<ol key={index}>{item}</ol>))}</div></ModalBody>
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

      <div className="showemp ml-4 mr-4 mb-3 mt-4 " >
        <div className="showline">
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
              <ModalBody><div>{Object.entries(data.data).map((item, index) => (<ol key={index}>{item}</ol>))}</div></ModalBody>
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
