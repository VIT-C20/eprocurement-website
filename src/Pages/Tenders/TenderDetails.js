import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Form, Input, Button, Label, FormGroup, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {Link} from 'react-router-dom'
import {tender} from '../../Utils/tenderExample';
// import axios from 'axios'
import "./CSS/tenderDetails.css";

export default class TenderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mine: false,
            edit: false,
            isLoading: false,
            isModalOpen: false
        }
        this.documents = []
        this.document = {
            documentTitle: '',
            documentDescription: '',
            documentLink: ''
        }
        this.tender = {}
    }

    // componentDidMount() {
    //     axios.get(this.props.match.url)
    //     .then(res => {
    //         console.log(res.data)
    //         this.tender = res.data
    //         if (localStorage.UserId && res.data.host === localStorage.UserId)
    //             this.setState({
    //                 mine: true,
    //             });
    //         this.setState({ isLoading: false });
    //     })
    //     .catch(err => console.log(err))
    // }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    componentWillMount() {
        this.documents = [...tender.documents]
    }

    handleChange = (event) => {
        this.setState({
			[event.target.name]: event.target.value
		});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        
    }

    addDocument = (event) => {
        this.documents.push({...this.document});
        event.preventDefault();
        this.toggleModal();
    }

    handleAddDocument = (event) => {
        this.document[event.target.name] = event.target.value
    }

    removeDocument = (index) => {
        this.documents.splice(index, 1);
        console.log(this.documents);
        this.setState({isModalOpen: false})
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
                        <h3>Applied Bids: {tender.bidCount}</h3>
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
                                <Label htmlFor="orgChain" className="col-4 offset-1">Organization Chain</Label>
                                <Input className="col-4 col-md-5" type="text" id="orgChain" name="orgChain" onChange={this.handleChange} disabled value={tender.orgChain} required />
                                <Link to={`/user/`}>
                                    <Button title="View Profile" className="ml-1 ml-md-4" color="primary" ><span className="fa fa-address-card-o fa-lg"></span></Button>
                                </Link>
                            </FormGroup>
                            :
                            <FormGroup className="row">
                                <Label htmlFor="orgChain" className="col-4 offset-1">Organization Chain</Label>
                                <Input className="col-6" type="text" id="orgChain" name="orgChain" onChange={this.handleChange} readOnly={!this.state.edit} defaultValue={tender.orgChain} required />
                            </FormGroup>
                        }

                    <FormGroup className="row">
                        <Label htmlFor="tenderId" className="col-4 offset-1">Tender ID</Label>
                        <Input className="col-6" type="text" id="tenderId" name="tenderId" defaultValue={tender.tenderId} readOnly required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="tenderKey" className="col-4 offset-1">Tender Key</Label>
                        <Input className="col-6" type="text" id="tenderKey" name="tenderKey"  defaultValue={tender.tenderKey} readOnly required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="tenderStatus" className="col-4 offset-1">Tender Status</Label>
                        <Input className="col-6" type="text" id="tenderStatus" name="tenderStatus"  defaultValue={tender.tenderKey} readOnly required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="tenderType" className="col-4 offset-1">Tender Type</Label>
                        <Input className="col-6" type="text" id="tenderType" name="tenderType" onChange={this.handleChange} defaultValue={tender.tenderType} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="tenderCategory" className="col-4 offset-1">Tender Category</Label>
                        <Input className="col-6" type="text" id="tenderCategory" name="tenderCategory" onChange={this.handleChange} defaultValue={tender.tenderCategory} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="paymentMode" className="col-4 offset-1">Tender Category</Label>
                        <Input className="col-6" type="text" id="paymentMode" name="paymentMode" onChange={this.handleChange} defaultValue={tender.paymentMode} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="noCovers" className="col-4 offset-1">No. of Covers</Label>
                        <Input className="col-6" type="text" id="noCovers" name="noCovers" onChange={this.handleChange} defaultValue={tender.noCovers} readOnly={!this.state.edit} required />
                    </FormGroup>
                    
                    <h4 className="col-6">Tender Fee Details</h4>

                    <FormGroup className="row">
                        <Label htmlFor="tenderFee" className="col-4 offset-1">Tender Fee in Rs.</Label>
                        <Input className="col-6" type="text" id="tenderFee" name="tenderFee" onChange={this.handleChange} defaultValue={tender.tenderFee} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="feePayableTo" className="col-4 offset-1">Fee Payable To</Label>
                        <Input className="col-6" type="text" id="feePayableTo" name="feePayableTo" onChange={this.handleChange} defaultValue={tender.feePayableTo} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="feePayableAt" className="col-4 offset-1">Fee Payable At</Label>
                        <Input className="col-6" type="text" id="feePayableAt" name="feePayableAt" onChange={this.handleChange} defaultValue={tender.feePayableAt} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <h4 className="col-6">Work Item Details</h4>
                    <FormGroup className="row">
                        <Label htmlFor="title" className="col-4 offset-1">Title</Label>
                        <Input className="col-6" type="text" id="title" name="title" onChange={this.handleChange} defaultValue={tender.title} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="workDescription" className="col-4 offset-1">Work Description</Label>
                        <Input className="col-6" type="textarea" id="workDescription" name="workDescription" onChange={this.handleChange} defaultValue={tender.workDescription} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="productCategory" className="col-4 offset-1">Product Category</Label>
                        <Input className="col-6" type="text" id="productCategory" name="productCategory" onChange={this.handleChange} defaultValue={tender.productCategory} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="bidValidity" className="col-4 offset-1">Bid validity (Days)</Label>
                        <Input className="col-6" type="text" id="bidValidity" name="bidValidity" onChange={this.handleChange} defaultValue={tender.bidValidity} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="periodOfWork" className="col-4 offset-1">Period Of Work (Days)</Label>
                        <Input className="col-6" type="text" id="periodOfWork" name="periodOfWork" onChange={this.handleChange} defaultValue={tender.periodOfWork} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="location" className="col-4 offset-1">Location</Label>
                        <Input className="col-6" type="text" id="location" name="location" onChange={this.handleChange} defaultValue={tender.location} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="pincode" className="col-4 offset-1">Pincode</Label>
                        <Input className="col-6" type="text" id="pincode" name="pincode" onChange={this.handleChange}  defaultValue={tender.pincode} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <h4>Critical Dates</h4>
                    {
                        this.state.edit ?
                        <div>
                        <FormGroup className="row">
                        <Label htmlFor="bidOpeningDate" className="col-4 offset-1">Bid Opening Date</Label>
                        <Input className="col-6" type="datetime-local" id="bidOpeningDate" name="bidOpeningDate" onChange={this.handleChange}  readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="bidClosingDate" className="col-4 offset-1">Bid Closing Date</Label>
                        <Input className="col-6" type="datetime-local" id="bidClosingDate" name="bidClosingDate" onChange={this.handleChange}  readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="resultDate" className="col-4 offset-1">Result Date</Label>
                        <Input className="col-6" type="datetime-local" id="resultDate" name="resultDate" onChange={this.handleChange}  readOnly={!this.state.edit} required />
                    </FormGroup>
                        </div>
                        :
                        <div>
                            <FormGroup className="row">
                        <Label htmlFor="bidOpeningDate" className="col-4 offset-1">Bid Opening Date</Label>
                        <Input className="col-6" type="text" id="bidOpeningDate" name="bidOpeningDate"  defaultValue={tender.bidOpeningDate} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="bidClosingDate" className="col-4 offset-1">Bid Closing Date</Label>
                        <Input className="col-6" type="text" id="bidClosingDate" name="bidClosingDate"  defaultValue={tender.bidClosingDate} readOnly={!this.state.edit} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="resultDate" className="col-4 offset-1">Result Date</Label>
                        <Input className="col-6" type="text" id="resultDate" name="resultDate"  defaultValue={tender.resultDate} readOnly={!this.state.edit} required />
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
                                {
                                    this.state.mine?
                                    <Button type="submit" value="remove" color="danger" onClick={(event) => {
                                    event.preventDefault();
                                    this.removeDocument(index);
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
