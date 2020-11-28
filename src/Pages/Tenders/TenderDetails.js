import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Form, Input, Button, Label, FormGroup, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {Link} from 'react-router-dom'
import {tender} from '../../Utils/tenderExample';
import axios from 'axios'
import "./CSS/tenderDetails.css";

export default class TenderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mine: false,
            edit: false,
            isLoading: true,
            isModalOpen: false
        }
        
        this.document = {}
        this.tender = {}
    }

    componentDidMount() {
        axios.get(this.props.match.url)
        .then(res => {
            console.log(res.data)
            this.tender = res.data
            console.log(this.tender)
            if (localStorage.UserId && res.data.Host === localStorage.UserId)
                this.setState({
                    mine: true,
                });
            this.setState({ isLoading: false });
        })
        .catch(err => console.log(err))
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleChange = (event) => {
        this.tender[event.target.name] = event.target.value
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.tender);
        
    }

    addDocument = (event) => {
        // this.documents.push({...this.document});
        axios.post(`/tender/${this.tender.id}/addDocument`, this.document, {
            headers: {
                Authorization: localStorage.IdToken,
            },
        })
        .then(res => {
            console.log(res.data)
            this.componentDidMount()
        })
        .catch(err => console.log(err))
        event.preventDefault();
        this.toggleModal();
    }

    handleAddDocument = (event) => {
        this.document[event.target.name] = event.target.value
    }

    removeDocument = (id) => {
        // this.documents.splice(index, 1);
        axios.delete(`/tender/${this.tender.id}/documents/${id}`, {
            headers: {
                Authorization: localStorage.IdToken,
            },
        })
        .then(res => {
            console.log(res.data)
            this.componentDidMount()
        })
        .catch(err => console.log(err))
        // this.setState({isModalOpen: false})
    }

    render() {
        return (
            !this.state.isLoading?
            <div className="container">
                <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Tenders</Link></BreadcrumbItem>
                        <BreadcrumbItem>Tender Details</BreadcrumbItem>
                </Breadcrumb>
                <div className="row dashboard-container">
                    <div>
                        <h3>Applied Bids: {this.tender.bidCount}</h3>
                    </div>

                    <div className="d-btn-container">
                        {
                            this.state.mine? 
                            <Link to={`/user/`}>
                            <Button color="success"> <span className="fa fa-eye fa-lg"> View Bids</span></Button>
                            </Link>
                            :
                            <Link to={`/tender/${tender.tenderId}/applyTender`}>
                            <Button color="success"> <span className="fa fa-check-circle fa-lg"> Apply</span></Button>
                            </Link>
                        }

                        <Link to={`/user/`}>
                            <Button color="warning"> <span className="fa fa-history fa-lg"> History</span></Button>
                            </Link>
                    </div>
    
                </div>
                <div className="row mb-2">
                    <h4 className="col-6">Basic Details</h4>
                    {
                        (this.state.mine && !this.state.edit)?
                            <Button className="offset-3 offset-md-4 " color="success" onClick={() => {this.setState({ edit: true})
                            }}><span className="fa fa-pencil"> Edit</span></Button>
                        : this.state.mine ?
                            <Button className="offset-3 offset-md-4 " color="danger" onClick={() => {
                            this.setState({ edit: false})
                            window.location.reload(false)
                            }}><span className="fa fa-times"> Cancel</span></Button>
                        :null
                    }
                    
                </div>
                <Form className="mb-2" onSubmit={this.handleSubmit}>
                        {
                            (!this.state.mine)?
                            <FormGroup className="row">
                                <Label htmlFor="OrgChain" className="col-4 offset-1">Organization Chain</Label>
                                <Input className="col-4 col-md-5" type="text" id="OrgChain" name="OrgChain"  disabled value={this.tender.OrgChain} required />
                                <Link to={`/user/`}>
                                    <Button title="View Profile" className="ml-1 ml-md-4" color="primary" ><span className="fa fa-address-card-o fa-lg"></span></Button>
                                </Link>
                            </FormGroup>
                            :
                            <FormGroup className="row">
                                <Label htmlFor="OrgChain" className="col-4 offset-1">Organization Chain</Label>
                                <Input className="col-6" type="text" id="OrgChain" name="OrgChain" readOnly defaultValue={this.tender.OrgChain} required />
                            </FormGroup>
                        }

                    <FormGroup className="row">
                        <Label htmlFor="id" className="col-4 offset-1">Tender ID</Label>
                        <Input className="col-6" type="text" id="id" name="id" defaultValue={this.tender.id} readOnly required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="tenderKey" className="col-4 offset-1">Tender Key</Label>
                        <Input className="col-6" type="text" id="tenderKey" name="tenderKey"  defaultValue={this.tender.tenderKey} readOnly required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="status" className="col-4 offset-1">Tender Status</Label>
                            <Input className="col-6" type="text" id="status" onChange={this.handleChange} name="status" defaultValue={this.tender.status} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="TenderType" className="col-4 offset-1">Tender Type</Label>
                        <Input className="col-6" type="text" id="TenderType" name="TenderType" onChange={this.handleChange} defaultValue={this.tender.TenderType} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="TenderCategory" className="col-4 offset-1">Tender Category</Label>
                        <Input className="col-6" type="text" id="TenderCategory" name="TenderCategory" onChange={this.handleChange} defaultValue={this.tender.TenderCategory} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="PaymentMode" className="col-4 offset-1">Payment Mode</Label>
                        <Input className="col-6" type="text" id="PaymentMode" name="PaymentMode" onChange={this.handleChange} defaultValue={this.tender.PaymentMode} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="NoCovers" className="col-4 offset-1">No. of Covers</Label>
                        <Input className="col-6" type="text" id="NoCovers" name="NoCovers" onChange={this.handleChange} defaultValue={this.tender.NoCovers} readOnly={!this.state.edit} required />
                    </FormGroup>
                    
                    <h4 className="col-6">Tender Fee Details</h4>

                    <FormGroup className="row">
                        <Label htmlFor="TenderFee" className="col-4 offset-1">Tender Fee in Rs.</Label>
                        <Input className="col-6" type="text" id="TenderFee" name="TenderFee" onChange={this.handleChange} defaultValue={this.tender.TenderFee} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="FeePayableTo" className="col-4 offset-1">Fee Payable To</Label>
                        <Input className="col-6" type="text" id="FeePayableTo" name="FeePayableTo" onChange={this.handleChange} defaultValue={this.tender.FeePayableTo} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="FeePayableAt" className="col-4 offset-1">Fee Payable At</Label>
                        <Input className="col-6" type="text" id="FeePayableAt" name="FeePayableAt" onChange={this.handleChange} defaultValue={this.tender.FeePayableAt} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <h4 className="col-6">Work Item Details</h4>
                    <FormGroup className="row">
                        <Label htmlFor="title" className="col-4 offset-1">Title</Label>
                        <Input className="col-6" type="text" id="title" name="title" onChange={this.handleChange} defaultValue={this.tender.title} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="workDescription" className="col-4 offset-1">Work Description</Label>
                        <Input className="col-6" type="textarea" id="workDescription" name="workDescription" onChange={this.handleChange} defaultValue={this.tender.workDescription} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="productCategory" className="col-4 offset-1">Product Category</Label>
                        <Input className="col-6" type="text" id="productCategory" name="productCategory" onChange={this.handleChange} defaultValue={this.tender.productCategory} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="bidValidity" className="col-4 offset-1">Bid validity (Days)</Label>
                        <Input className="col-6" type="text" id="bidValidity" name="bidValidity" onChange={this.handleChange} defaultValue={this.tender.bidValidity} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="periodOfWork" className="col-4 offset-1">Period Of Work (Days)</Label>
                        <Input className="col-6" type="text" id="periodOfWork" name="periodOfWork" onChange={this.handleChange} defaultValue={this.tender.periodOfWork} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="locatiion" className="col-4 offset-1">location</Label>
                        <Input className="col-6" type="text" id="locatiion" name="locatiion" onChange={this.handleChange} defaultValue={this.tender.locatiion} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="Pincode" className="col-4 offset-1">Pincode</Label>
                        <Input className="col-6" type="text" id="Pincode" name="Pincode" onChange={this.handleChange}  defaultValue={this.tender.Pincode} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <h4>Critical Dates</h4>
                    {
                        this.state.edit ?
                        <div>
                        <FormGroup className="row">
                        <Label htmlFor="BidOpeningDate" className="col-4 offset-1">Bid Opening Date</Label>
                        <Input className="col-6" type="datetime-local" id="BidOpeningDate" name="BidOpeningDate" onChange={this.handleChange}  readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="BidClosingDate" className="col-4 offset-1">Bid Closing Date</Label>
                        <Input className="col-6" type="datetime-local" id="BidClosingDate" name="BidClosingDate" onChange={this.handleChange}  readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="ResultDate" className="col-4 offset-1">Result Date</Label>
                        <Input className="col-6" type="datetime-local" id="ResultDate" name="ResultDate" onChange={this.handleChange}  readOnly={!this.state.edit} required />
                    </FormGroup>
                        </div>
                        :
                        <div>
                            <FormGroup className="row">
                        <Label htmlFor="BidOpeningDate" className="col-4 offset-1">Bid Opening Date</Label>
                        <Input className="col-6" type="text" id="BidOpeningDate" name="BidOpeningDate"  defaultValue={this.tender.BidOpeningDate} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="BidClosingDate" className="col-4 offset-1">Bid Closing Date</Label>
                        <Input className="col-6" type="text" id="BidClosingDate" name="BidClosingDate"  defaultValue={this.tender.BidClosingDate} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="ResultDate" className="col-4 offset-1">Result Date</Label>
                        <Input className="col-6" type="text" id="ResultDate" name="ResultDate"  defaultValue={this.tender.ResultDate} readOnly={!this.state.edit} required />
                    </FormGroup>
                        </div>
                    }
                    
                    {
                        (this.state.edit)?
            
                            <div className="btn-container">
                                <Button type="submit" value="submit" color="success"><span className="fa fa-paper-plane fa-lg"> Update</span></Button>

                                <Button color="danger" onClick={() => {
                                    this.setState({edit: false})
                                    window.location.reload(false);
                                    }} ><span className="fa fa-times fa-lg"> Cancel</span></Button>
                            </div>
                            
                        :null
                    }
                </Form>
                
                <h4>Documents</h4>
                    {
                        (this.tender.documents.length)?
                        this.tender.documents.map((document, index) => (
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
                                {
                                    this.state.mine?
                                    <Button type="submit" value="remove" color="danger" onClick={(event) => {
                                    event.preventDefault();
                                    this.removeDocument(document._id);
                                    }}><span className="fa fa-trash"> Remove</span></Button>
                                    :null
                                }
                                <hr/>
                            </Form>
                        ))
                        :null
                    }
                    <div className="doc-btn-container mt-4">
                    {
                        this.state.mine ?
                        <Button onClick={this.toggleModal} color="warning" > <span className="fa fa-plus-circle fa-lg"> Add Document</span></Button>
                        :null
                    }
                    {
                        !this.state.mine ?
                        <Link to={`/user/`}>
                        <Button color="success"> <span className="fa fa-check-circle fa-lg"> Apply</span></Button>
                        </Link>
                        :null 
                    }
                    </div>

                    {/* Modal component */}
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
            :
            <div className="container">
            <h3>
                    Loading ...
            </h3>
            </div>
        )
    }
}
