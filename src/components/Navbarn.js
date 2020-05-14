import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal, ModalHeader, ModalBody,Button,
    Form, FormGroup, Input, Label
} from 'reactstrap';

import { Link } from 'react-router-dom';

class Header extends React.Component {


    constructor(props) {
        super(props);
    this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
    this.state = {
        isNavOpen: false,
        isModalOpen: false,
        isModal2Open: false
    };
    }

toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });


}

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    toggleModal2() {
        this.setState({
            isModal2Open: !this.state.isModal2Open
        });
    }

render(){

    return (
        <React.Fragment>
      
            <Navbar className="navbartop" sticky="top" light expand="lg">
                <div className="container-fluid">
                <NavbarBrand className="mr-auto" href="/home">
                    <img src="/assets/images/Apna_logo.png" width="100" height="100" alt="logo" />{' '} ApnaBotanicals
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} className="mr-2" />
                <Collapse isOpen={this.state.isNavOpen} navbar>

                   
                    <Nav className="ml-auto" navbar>

                        <NavItem>
                            <NavLink><Link to='/home'>Home</Link></NavLink>
                        </NavItem>
                       
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactst">About Us</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret className="navbartop">
                                Products
                            </DropdownToggle>
                                <DropdownMenu className="navbartop" right>
                                <DropdownItem >
                                    <li ><Link to='/powder'>Kratom Powder</Link></li>
                                </DropdownItem>
                                <DropdownItem>
                                    <li ><Link to='/capsules'>Kratom Capsule</Link></li>
                                </DropdownItem>
                            
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret  >
                                My Account
                            </DropdownToggle>
                                <DropdownMenu className="navbartop" right>
                                    <DropdownItem onClick={this.toggleModal}>
                                        SignIn
                            </DropdownItem>
        
                                    <DropdownItem onClick={this.toggleModal2}>
                                    SignUp
                            </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                        <Link to='/contact'>Help</Link>
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>


                        <NavItem>
                            <NavLink href="/components/">FAQ'S</NavLink>
                        </NavItem>
                    </Nav>
                    
                </Collapse>
                </div>
            </Navbar>

           


            <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Sign In</ModalHeader>
                <ModalBody>

                    <Form onSubmit={this.handleLogin}>
                        
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                innerRef={input => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={input => this.password = input} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>

                </ModalBody>
            </Modal>


            <Modal isOpen={this.state.isModal2Open} toggle={this.toggleModal2}>
                <ModalHeader toggle={this.toggleModal2}>Sign Up</ModalHeader>
                <ModalBody>

                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                innerRef={input => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={input => this.password = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Confirm Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={input => this.password = input} />
                        </FormGroup>
                        <FormGroup> 
                            <Label htmlFor="username">Email</Label>
                            <Input type="text" id="username" name="email"
                                innerRef={input => this.username = input} />
                          
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">SignUp</Button>
                    </Form>

                </ModalBody>
            </Modal>
           



        </React.Fragment>
    );
}
}

export default Header;