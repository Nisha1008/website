import React from 'react'
import Nav from 'react-bootstrap/Nav';
import testSvg from '../../asets/hill.jpg'
const Navbar = () => {
    return (
        <div>
            <img src={testSvg} style={{ "width": 100, "height": 100 }} alt="" />
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navbar
