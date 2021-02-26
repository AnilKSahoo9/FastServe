import React, { Component } from 'react';
import { NavItem } from 'reactstrap';
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import './Navbar.css';
import logo from "../../image/Hotel.png";
import Menu from '../Menu';

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render() {
        return(
            <nav className = "NavbarItems">
                <h1
                    className="navbar-logo ml-5">
                    <img
                    src={logo}
                    alt="Logo"
                    style={{ height: 80,width:80 }}
                  />

                </h1>
                <Menu />
                {/* <div className="menu-icon" onClick={this.handleClick}>
                    <i className= {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div> 
                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                                </li>
                        )
                    } )}
                   
                </ul> */}
            </nav>
        )
    }
}

export default Navbar