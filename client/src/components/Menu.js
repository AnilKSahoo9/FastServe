import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

export const Menu = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action"
                color="warning"
                tag="a"
                to="/"
                action>Home</Link>
            <Link
                className="list-group-item list-group-item-action" outline color="info"
                tag="a"
                to="/"
                action>Tables</Link>
            <Link
                className="list-group-item list-group-item-action" outline color="secondary"
                tag="a"
                to="/"
                action>Parcels</Link>
            <Link
                className="list-group-item list-group-item-action" outline color="success"
                tag="a"
                to="/"
                action>Waiters</Link>
            <Link
                className="list-group-item list-group-item-action" outline color="danger"
                tag="a"
                to="/"
                action>Kichens</Link>
            <Link
                className="list-group-item list-group-item-action" outline color="secondary"
                tag="a"
                to="/"
                action>Billers</Link>
            <Link
                className="list-group-item list-group-item-action" outline color="info"
                tag="a"
                to="/AddUser"
                action>Adduser</Link>
            <Link
                className="list-group-item list-group-item-action" outline color="warning"
                tag="a"
                to="/Showuser"
                action>ShowUser</Link>
        </ListGroup>
    )
}
export default Menu
