import React from 'react'
import { Button, Table } from 'reactstrap';
const Showuser = () => {
    return (
        <div >
        <div className="border border-dark rounded ml-4 mr-4 mb-3">
            <div style={{ backgroundColor: "Gray", color: "white " }} ><h4>Waiter</h4></div>
            <div>
            <Table responsive size="sm">
                <thead >
                    <tr style={{width: "30%"}}>
                        <th>No.</th>
                        <th>User Name</th>
                        <th>Attendance for Today</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Ravi Kumar</td>
                        <td>Present</td>
                        <td><Button outline color="primary">Show Details</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Pranaya Gulati</td>
                        <td>Present</td>
                        <td><Button outline color="primary">Show Details</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ankur Tripathi</td>
                        <td>Half-Day</td>
                        <td><Button  outline color="primary">Show Details</Button></td>
                    </tr>
                    
                </tbody> 
               
            </Table>
            </div>
           </div>
           <div className="border border-dark rounded ml-4 mr-4 mb-3">
            <div style={{backgroundColor: "Gray", color: "white " }}><h4>Billers</h4></div>
            
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
                        <td><Button outline color="primary">Show Details</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Akhilesh Singh</td>
                        <td>Absent</td>
                        <td><Button outline color="primary">Show Details</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Suresh Mishra</td>
                        <td>Present</td>
                        <td><Button outline color="primary">Show Details</Button></td>
                    </tr>
                </tbody>
            </Table>
            </div>
            </div>
           

            <div className="border border-dark rounded ml-4 mr-4 mb-3 ">
            <div style={{backgroundColor: "Gray", color: "white " }}><h4>Kichens</h4></div>
            <div >
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
                        <td><Button outline color="primary">Show Details</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Aswin Panigrahi</td>
                        <td>Present</td>
                        <td><Button outline color="primary">Show Details</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ashish Sahoo</td>
                        <td>Present</td>
                        <td><Button outline color="primary">Show Details</Button></td>
                    </tr>
                </tbody>
            </Table>
            </div>
            </div>
            
            <div className="border border-dark rounded ml-4 mr-4 mb-3">
            <div style={{ backgroundColor: "Gray", color: "white " }}><h4>Other Workers</h4></div>
            <div >
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
                        <td><Button outline color="primary">Show Details</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Juned Raj</td>
                        <td>Present</td>
                        <td><Button outline color="primary">Show Details</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Satu Swain</td>
                        <td>Present</td>
                        <td><Button outline color="primary">Show Details</Button></td>
                    </tr>
                </tbody>
            </Table>
            </div>
            </div>
            </div>
        
    )
}

export default Showuser
