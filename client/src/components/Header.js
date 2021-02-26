// import React from 'react'
// import {Button } from 'reactstrap'
// const Header = () => {
//     return (
//         <div style ={{backgroundColor:"yellow"}}>
//         <div className="text-right">
        
//             <h5 className="text-left ">Smart Beanary</h5>
//             <Button    color="primary"></Button>LogOut
            
//             <hr></hr>
//         </div>
//         </div>
        
//     )
// }
// export default Header
import React from 'react';
import {Button } from 'reactstrap';
// import '././Navbar/Navbar.css';
const Header = () => {
    return (
        <div className="Header"
         style ={{backgroundImage: `linear-gradient(to left top, #37051d, #732820, #96610c, #8ea61f, #12eb83)`,width:'100%',height:'15%',paddingLeft:0}}>
        <div className="text-right">   
            <Button  color="danger mt-2 mx-2">LogOut</Button>
        </div>
        </div>
        
    )
}
export default Header
