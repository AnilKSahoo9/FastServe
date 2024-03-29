import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";
import { userDetails, billerDetails, chefDetails } from "../../StaticData/showemployeeData"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../css/AdminStyles.css";
// import "../../css/showemployee.css";
import ClipLoader from "react-spinners/ClipLoader";

const ShowEmployee = () => {

  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [employeeList, setEmployeeList] = useState({ billers: [], waiters: [], chefs: [] })
  const [loading, setLoading] = useState(true);
  const [displayModal, setdisplayModal] = useState(false);

  useEffect(() => {
    const fetchMenuList = () => {
      axios
        .get(
          `http://localhost:4000/showemployees/`,
        ).then(res => {
          console.log(res)
          setEmployeeList(res.data)
          setLoading(false)
        }).catch(err => console.log(err))
    }
    fetchMenuList()
    // return () => {
    //   cleanup
    // }
  }, [])

  const handleShowDetails = (event) => {
    setShow(!show);
    setData({ data: event });
    setdisplayModal(!displayModal);
  };

  const handleClick = () => {
    // show && displayModal && {setShow(false),setdisplayModal(false)}
    if (show && displayModal === true) {
      setShow(false);
      setdisplayModal(false);
    } else {
      console.log("fail");
    }
  };
  console.log(employeeList)
  return (
    <div className="inner-container">
      {
        loading ? (
          <div style={{ marginTop: "290px" }}>
            <ClipLoader
              color="#1f305e"
              loading={true}
              css={""}
              size={100}
            />
          </div>
        ) : (
          <div>
            <div className="showemp" style={{ marginTop: "6rem" }} >
              <div className="showline">
                Waiters Employee Table
        </div>
              <div>
                <Table className="showemp_table"
                  responsive size="sm">
                  <thead>
                    <tr className="tr">
                      <th>Serial No.</th>
                      <th>Waiter Name </th>
                      <th>Attendance for Today</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeList.waiters.map((user, id) => (
                      <tr>
                        <th scope="row">{user.empId.slice(0, 8).toUpperCase()}</th>
                        <td>{user.name}</td>
                        <td>{user.modal.status.charAt(0).toUpperCase() + user.modal.status.slice(1)}</td>
                        <td>
                          <Button
                            className="showemp_btn"
                            outline
                            onClick={() => handleShowDetails(user.modal)
                            }
                          >
                            Show Waiter Details
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
                    <ModalHeader>Employee Details</ModalHeader>
                    <ModalBody><div>{console.log(data)}</div></ModalBody>
                    <ModalFooter>
                      {/* <Button color="primary">
                  Edit
          </Button>{" "} */}
                      <Button color="secondary" onClick={handleClick}>
                        Cancel
          </Button>
                    </ModalFooter>
                  </Modal>
                </div>) : null}
            </div>
            <div className="showemp"  >
              <div className="showline">
                Billers Employee Table
        </div>
              <div>
                <Table className="showemp_table"
                  responsive size="sm">
                  <thead>
                    <tr className="tr">
                      <th>Serial No.</th>
                      <th>Biller Name</th>
                      <th>Attendance for Today</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeList.billers.map((biller, id) => (
                      <tr>
                        <th scope="row">{biller.empId.slice(0, 8).toUpperCase()}</th>
                        <td>{biller.name}</td>
                        <td>{biller.modal.status.charAt(0).toUpperCase() + biller.modal.status.slice(1)}</td>
                        <td><Button
                          outline
                          className="showemp_btn"
                          onClick={() => handleShowDetails(biller.modal)
                          }
                        >
                          Show Biller Details
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
                      {/* <Button color="primary">
                  Edit
          </Button>{" "} */}
                      <Button color="secondary" onClick={handleClick}>
                        Cancel
          </Button>
                    </ModalFooter>
                  </Modal>
                </div>) : null}
            </div>

            <div className="showemp" >
              <div className="showline">
                Chefs Employee Table
        </div>
              <div>
                <Table className="showemp_table"
                  responsive size="sm">
                  <thead>
                    <tr>
                      <th>Serial No.</th>
                      <th>Chef Name</th>
                      <th>Attendance for Today</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeList.chefs.map((chef, id) => (
                      <tr>
                        <th scope="row">{chef.empId.slice(0, 8).toUpperCase()}</th>
                        <td>{chef.name}</td>
                        <td>{chef.modal.status.charAt(0).toUpperCase() + chef.modal.status.slice(1)}</td>
                        <td><Button
                          outline
                          className="showemp_btn"

                          onClick={() => handleShowDetails(chef.modal)
                          }
                        >
                          Show Chef Details
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
                      {/* <Button color="primary">
                  Edit
          </Button>{" "} */}
                      <Button color="secondary" onClick={handleClick}>
                        Cancel
          </Button>
                    </ModalFooter>
                  </Modal>
                </div>) : null}
            </div>
          </div>
        )}

    </div>
  );
};

export default React.memo(ShowEmployee);
