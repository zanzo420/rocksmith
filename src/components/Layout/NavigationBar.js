import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button, FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Rocksmith</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                                Home
                            </NavItem>
                            <NavItem eventKey={2} componentClass={Link} href="/bands" to="/bands">
                                Bands
                            </NavItem>
                            <NavItem eventKey={3} componentClass={Link} href="/about" to="/about">
                                About
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;