import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavbarBrand, NavLink} from 'reactstrap';

class AppNav extends Component {
    state = { }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Expense Tracker App</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">My Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/categories">My Categories</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/expenses">My Expenses</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default AppNav;