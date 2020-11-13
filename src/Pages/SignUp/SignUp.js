import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, Input, Button, Label, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./signup.css";

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
            companyEmail: '',
            role: 'Bidder',
            companyName: '',
            companyDetails: '',
            address: '',
            city: '',
            state: '',
            postalCode: '',
            contactName: '',
            designation: '',
            contactNo: '',
            PANno: '',
            establishedDate: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }


    render() {
        return (
            <div className="container" >
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem>Sign Up</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="signUpForm" style={{border:"1px solid #ccc",padding:"20px 0px",borderRadius:"10px"}}>
                    <Form  onSubmit={this.handleSubmit}>
                            <center style={{marginBottom:"30px"}}><h2>Register</h2></center>

                            <FormGroup className="row">
                                <Label htmlFor="username" className="col-4 offset-1">Username</Label>
                                <Input className="col-6" type="text" id="username" name="username" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="password" className="col-4 offset-1">Password</Label>
                                <Input type="password" id="password" name="password" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="role" className="col-4 offset-1">Role</Label>
                                <Input type="select" name="role" id="role" className="col-6" onChange={(e) => {this.setState({ role: e.target.value })}}>
                                <option value="Bidder">Bidder</option>
                                <option value="Gov">Government</option>
                                </Input>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="companyName" className="col-4 offset-1">Company Name</Label>
                                <Input type="text" id="companyName" name="companyName" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="companyEmail" className="col-4 offset-1">Company Email</Label>
                                <Input type="email" id="companyEmail" name="companyEmail" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="companyDetails" className="col-4 offset-1">Company Details</Label>
                                <Input type="textarea" id="companyDetails" name="companyDetails" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="address" className="col-4 offset-1">Address</Label>
                                <Input type="text" id="address" name="address" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="city" className="col-4 offset-1">City</Label>
                                <Input type="text" id="city" name="city" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="state" className="col-4 offset-1">State</Label>
                                <Input type="text" id="state" name="state" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="postalCode" className="col-4 offset-1">Postal Code</Label>
                                <Input type="text" id="postalCode" name="postalCode" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="contactName" className="col-4 offset-1">Contact Name</Label>
                                <Input type="text" id="contactName" name="contactName" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="designation" className="col-4 offset-1">Designation</Label>
                                <Input type="text" id="designation" name="designation" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="contactNo" className="col-4 offset-1">Contact No.</Label>
                                <Input type="text" id="contactNo" name="contactNo" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="PANno" className="col-4 offset-1">PAN/TAN no.</Label>
                                <Input type="text" id="PANno" name="PANno" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>
                                
                            <FormGroup className="row">
                                <Label htmlFor="establishedDate" className="col-4 offset-1">Establishment Date</Label>
                                <Input type="date" id="establishedDate" name="establishedDate" onChange={this.handleChange} required  className="col-6"/>
                            </FormGroup>

                            <Button type="submit" value="submit" color="success" className="offset-5">Register</Button>
                            {/* {(this.state.error !== '')? <p className="text-danger mt-2">{this.state.error}</p>: null} */}
                        </Form>
                </div>
            </div>
        );
    };
}
