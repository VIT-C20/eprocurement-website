import React, { Component } from 'react'
import { Navbar, Nav, NavbarToggler, NavItem, Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import "./header.css";

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            authenticated: false,
            role: 'Bidder',
            username: '',
            password: '',
            errors: '',
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
    };
    
    handleLogin(event){
        event.preventDefault();
        let credentials = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/users/login', credentials)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('IdToken', `Bearer ${res.data.token}`);
            localStorage.setItem('Role', res.data.role);
            localStorage.setItem('UserId', jwtDecode(localStorage.IdToken)._id)
            this.setState({
                role: res.data.role,
                authenticated: true
            })
            this.toggleModal();
            
        })
        .catch(err => {
            this.setState({
                error: '* Incorrect Username or Password'
            })
        })
    }

    logout = () => {
        localStorage.clear();
        this.setState({
            role: 'Bidder',
            authenticated: false
        })
    }

    componentDidMount() {
        const token = localStorage.IdToken;
        if(token) {
            const decodedToken = jwtDecode(token);
            if(decodedToken.exp * 1000 < Date.now()) {
                this.setState({
                    role: 'Bidder',
                    authenticated: false
                })
                localStorage.clear();
            }
            else {
                this.setState({
                    role: localStorage.Role,
                    authenticated: true
                })
            }
        }
    }

    render() {
        return (
            <div className="mb-1">
            <Navbar dark expand="md" fixed="top">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar >

                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" >
                                        <span className="fa fa-home fa-lg"></span> Tenders
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/users" >
                                        <span className="fa fa-users fa-lg"></span> Users
                                </NavLink>
                                </NavItem>

                                {
                                    (this.state.authenticated) ? (
                                        <NavItem>
                                            <NavLink className="nav-link" to="/myTender" >
                                                <span className="fa fa-list fa-lg"></span> My Tenders
                                            </NavLink>
                                        </NavItem>
                                    ): null
                                }
                                {
                                    (this.state.role === 'Gov' && this.state.authenticated) ? (
                                        <NavItem>
                                            <NavLink className="nav-link" to="/createTender" >
                                                <span className="fa fa-plus-circle fa-lg"></span> Create Tenders
                                            </NavLink>
                                        </NavItem>
                                    ) :null
                                }

                                <NavItem>
                                    <NavLink className="nav-link" to="/faq" >
                                        <span className="fa fa-info fa-lg"></span> FAQ
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus" >
                                        <span className="fa fa-address-card fa-lg"></span> Contact us
                                </NavLink>
                                </NavItem>
                            </Nav>
                            {(!this.state.authenticated)?(
                                <Nav className="mt-2 ml-auto" navbar>
                                <NavItem>
                                    <Button className="mb-2 mr-3" color="success" onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg header-btn"> Log In </span>
                                    </Button>
                                </NavItem>
                                <NavItem>
                                <Link to="/signup" >
                                    <Button  color="danger">
                                        <span className="fa fa-user-plus fa-lg header-btn"> Register</span>
                                    </Button>
                                </Link>
                                </NavItem>
                            </Nav>
                            ):(
                                <Nav className="mt-2 ml-auto" navbar>
                                <NavItem>
                                    <Button className="mb-2 mr-3 profile-btn" color="success">
                                        <Link to={`/users/${localStorage.UserId}`}>
                                        <span className="fa fa-lg fa-user-circle-o"> My Profile </span>
                                        </Link>
                                    </Button>
                                </NavItem>
                                <NavItem>
                                    <Button color="danger" onClick={this.logout}>
                                        <span className="fa fa-sign-out fa-lg header-btn">Logout</span>
                                    </Button>
                                </NavItem>
                            </Nav>
                            )}
                            
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" onChange={this.handleChange} required />
                            </FormGroup>
                            <Button type="submit" value="submit" color="success">Login</Button>
                            {(this.state.error !== '')? <p className="text-danger mt-2">{this.state.error}</p>: null}
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
