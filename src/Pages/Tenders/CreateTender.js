import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Form, Input, Button, Label, FormGroup,Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./CSS/createTender.css";
import axios from "axios";

export class CreateTender extends Component {
    constructor(props) {
        super(props)
        this.state ={
            isModalOpen: false,
            orgChain: '',
            tenderKey: '',
            tenderType: '',
            tenderCategory: '',
            paymentMode: 'Offline',
            noCovers: '',
            tenderFee: '',
            feePayableTo: '',
            feePayableAt: '',
            title: '',
            workDescription: '',
            productCategory: '',
            bidValidity: '',
            periodOfWork: '',
            location: '',
            pincode: '',
            bidOpeningDate: '',
            bidClosingDate: '',
            resultDate: '',
            status: 'OPEN',
            OTP:''
        }
        this.documents = []
        this.document = {}
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleChange = (event) => {
        this.setState({
			[event.target.name]: event.target.value
		});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        console.log(this.documents);
        const payload = {...this.state, documents: [...this.documents]}
        console.log(payload)
        axios.post('/tender', payload, {
            headers: {
                Authorization: localStorage.IdToken
            }
        })
        .then(res => {
            console.log(res.data)
            alert('Tender created')
        })
        .catch(err => console.log(err))
    }

    addDocument = (event) => {
        this.documents.push({...this.document});
        event.preventDefault();
        this.toggleModal();
    }

    handleAddDocument = (event) => {
        this.document[event.target.name] = event.target.value
    }

    generateOTP = () => {
        console.log('generate otp')
        axios.get('/sendOTP', {
            headers: {
                Authorization: localStorage.IdToken
            }
        })
        .then(res => {
            console.log(res.data)
            alert('OTP Sent')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem>Create Tender</BreadcrumbItem>
                    </Breadcrumb>
                </div>

                <Form onSubmit={this.handleSubmit}>
                    <h4>Basic Details</h4>
                    <FormGroup className="row">
                        <Label htmlFor="orgChain" className="col-4 offset-1">Organization Chain</Label>
                        <Input className="col-6" type="text" id="orgChain" name="orgChain" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="tenderKey" className="col-4 offset-1">Tender Key</Label>
                        <Input className="col-6" type="text" id="tenderKey" name="tenderKey" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="tenderType" className="col-4 offset-1">Tender Type</Label>
                        <Input className="col-6" type="text" id="tenderType" name="tenderType" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="tenderCategory" className="col-4 offset-1">Tender Category</Label>
                        <Input className="col-6" type="text" id="tenderCategory" name="tenderCategory" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="paymentMode" className="col-4 offset-1">Payment Mode</Label>
                        <Input type="select" name="paymentMode" id="paymentMode" onChange={(e) => {this.setState({ paymentMode: e.target.value })}} className="col-6">
                        <option value="Offline">Offline</option>
                        <option value="Online">Online</option>
                        </Input>
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="noCovers" className="col-4 offset-1">No. of Covers</Label>
                        <Input className="col-6" type="text" id="noCovers" name="noCovers" onChange={this.handleChange} required />
                    </FormGroup>

                    <h4>Tender Fee Details</h4>
                    <FormGroup className="row">
                        <Label htmlFor="tenderFee" className="col-4 offset-1">Tender Fee in Rs.</Label>
                        <Input className="col-6" type="text" id="tenderFee" name="tenderFee" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="feePayableTo" className="col-4 offset-1">Fee Payable To</Label>
                        <Input className="col-6" type="text" id="feePayableTo" name="feePayableTo" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="feePayableAt" className="col-4 offset-1">Fee Payable At</Label>
                        <Input className="col-6" type="text" id="feePayableAt" name="feePayableAt" onChange={this.handleChange} required />
                    </FormGroup>

                    <h4>Work Item Details</h4>
                    <FormGroup className="row">
                        <Label htmlFor="title" className="col-4 offset-1">Title</Label>
                        <Input className="col-6" type="text" id="title" name="title" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="workDescription" className="col-4 offset-1">Work Description</Label>
                        <Input className="col-6" type="textarea" id="workDescription" name="workDescription" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="productCategory" className="col-4 offset-1">Product Category</Label>
                        <Input className="col-6" type="text" id="productCategory" name="productCategory" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="bidValidity" className="col-4 offset-1">Bid validity (Days)</Label>
                        <Input className="col-6" type="text" id="bidValidity" name="bidValidity" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="periodOfWork" className="col-4 offset-1">Period Of Work (Days)</Label>
                        <Input className="col-6" type="text" id="periodOfWork" name="periodOfWork" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="location" className="col-4 offset-1">Location</Label>
                        <Input className="col-6" type="text" id="location" name="location" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="pincode" className="col-4 offset-1">Pincode</Label>
                        <Input className="col-6" type="text" id="pincode" name="pincode" onChange={this.handleChange} required />
                    </FormGroup>

                    <h4>Critical Dates</h4>
                    <FormGroup className="row">
                        <Label htmlFor="bidOpeningDate" className="col-4 offset-1">Bid Opening Date</Label>
                        <Input className="col-6" type="datetime-local" id="bidOpeningDate" name="bidOpeningDate" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="bidClosingDate" className="col-4 offset-1">Bid Closing Date</Label>
                        <Input className="col-6" type="datetime-local" id="bidClosingDate" name="bidClosingDate" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="resultDate" className="col-4 offset-1">Result Date</Label>
                        <Input className="col-6" type="datetime-local" id="resultDate" name="resultDate" onChange={this.handleChange} required />
                    </FormGroup>

                    <h4>Documents</h4>
                    {
                        (this.documents.length)?
                        this.documents.map((document, index) => (
                            <Form>
                                <h6>Document {index + 1}</h6>
                                <FormGroup className="row">
                                    <Label htmlFor="documentTitle" className="col-4 offset-1">Document Title</Label>
                                    <Input type="text" id="documentTitle" name="documentTitle" value={document.documentTitle} readOnly  className="col-6"/>
                                </FormGroup>
                                <FormGroup className="row">
                                    <Label htmlFor="documentDescription" className="col-4 offset-1">Document Description</Label>
                                    <Input type="textarea" id="documentDescription" name="documentDescription" 
                                    value={document.documentDescription} readOnly className="col-6" />
                                </FormGroup>

                                <FormGroup className="row">
                                    <Label htmlFor="documentLink" className="col-4 offset-1">Document Link</Label>
                                    <Input type="text" id="documentLink" name="documentLink"
                                    value={document.documentLink} className="col-6" readOnly />
                                </FormGroup>
                                <Button type="submit" value="remove" color="danger" onClick={(event) => {
                                    event.preventDefault();
                                    this.documents.splice(index, 1);
                                    console.log(this.documents);
                                    this.setState({isModalOpen: false})
                                }}><span className="fa fa-trash"> Remove</span></Button>
                                <hr/>
                            </Form>
                        ))
                        :null
                    }
                    <div className="btn-container">
                        <Button onClick={this.toggleModal} color="warning"> <span className="fa fa-plus-circle fa-lg"> Add Document</span></Button>
                                                
                        <Button onClick={this.generateOTP} color="danger">Send OTP</Button>
                        <FormGroup className="row">
                            <Label htmlFor="OTP" className="col-2 mr-2">OTP</Label>
                            <Input className="col-6" type="text" id="OTP" name="OTP" onChange={this.handleChange} required />
                        </FormGroup>

                        <Button type="submit" value="submit" color="success"><span className="fa fa-paper-plane fa-lg"> Submit</span></Button>
                    </div>
                </Form>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Add Document</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.addDocument}>
                            <FormGroup>
                                <Label htmlFor="documentTitle">Document Title</Label>
                                <Input type="text" id="documentTitle" name="documentTitle" onChange={this.handleAddDocument} required />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="documentDescription">Document Description</Label>
                                <Input type="textarea" id="documentDescription" name="documentDescription" onChange={this.handleAddDocument} required />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="documentLink">Document Link</Label>
                                <Input type="text" id="documentLink" name="documentLink" onChange={this.handleAddDocument} required />
                            </FormGroup>
                            <Button type="submit" value="submit" color="success">Add</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default CreateTender
