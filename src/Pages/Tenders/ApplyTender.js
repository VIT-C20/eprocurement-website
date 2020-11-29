import React, { Component } from 'react'
import { Form, Input, Button, Label, FormGroup,Modal, ModalHeader, ModalBody } from 'reactstrap';
import "./CSS/createTender.css";
import axios from 'axios'

export default class ApplyTender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.bid = {}
        this.documents = []
        this.document = {}
    }
    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleChange = (event) => {
			this.bid[event.target.name] = event.target.value
    }

    componentWillMount() {
        console.log(this.props.match.params.tenderId)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.bid = {
            ...this.bid,
            tenderId: this.props.match.params.tenderId,
            profileId: localStorage.UserId,
            documents: [...this.documents]
        }
        console.log(this.bid);
        axios.post(`/tender/${this.props.match.params.tenderId}/applyBid`, this.bid, {
            headers: {
                Authorization: localStorage.IdToken,
            }
        })
        .then(res => {
            console.log(res.data)
            alert('Bid Submitted')
        })
        .catch(err => console.log(err));
    }

    addDocument = (event) => {
        this.documents.push({...this.document});
        event.preventDefault();
        this.toggleModal();
    }

    handleAddDocument = (event) => {
        this.document[event.target.name] = event.target.value
    }

    render() {
        return (
            <div className="container">

                <Form onSubmit={this.handleSubmit} style={{border:"1px solid #ccc",borderRadius:"10px",padding:"30px 10px"}}>
                    <center style={{marginBottom:"30px"}}><h1>Apply Tender</h1></center>

                    <FormGroup className="row">
                        <Label htmlFor="tenderId" className="col-4 offset-1">Tender ID</Label>
                        <Input className="col-6" type="text" id="tenderId" name="tenderId" value={this.props.match.params.tenderId} readOnly required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="profileId" className="col-4 offset-1">Your Profile ID</Label>
                        <Input className="col-6" type="text" id="profileId" name="profileId" value={localStorage.UserId} readOnly required />
                    </FormGroup>

                    {/* <FormGroup className="row">
                        <Label htmlFor="orgChain" className="col-4 offset-1">Organization Chain</Label>
                        <Input className="col-6" type="text" id="orgChain" name="orgChain" value={this.props.profile.orgChain} readOnly required />
                    </FormGroup> */}

                    <FormGroup className="row">
                        <Label htmlFor="bidDetails" className="col-4 offset-1">Bid Details</Label>
                        <Input className="col-6" type="textarea" id="bidDetails" name="bidDetails" onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="quotation" className="col-4 offset-1">Quotation</Label>
                        <Input className="col-6" type="text" id="quotation" name="quotation" onChange={this.handleChange} required />
                    </FormGroup>

                    <center><h4>Quotation Documents</h4></center>
                    {
                        (this.documents.length)?
                        this.documents.map((document, index) => (
                            <Form>
                                <FormGroup className="row">
                                    <Label className="offset-1"><h6><u>Document {index + 1}</u></h6></Label>
                                </FormGroup>
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
                                <Button type="submit" value="remove" className="offset-1" color="danger" onClick={(event) => {
                                    event.preventDefault();
                                    this.documents.splice(index, 1);
                                    console.log(this.documents);
                                    this.setState({isModalOpen: false})
                                }}><span className="fa fa-trash"> Remove</span></Button>
                            </Form>
                        ))
                        :null
                    }
                    <div className="btn-container">
                        <Button onClick={this.toggleModal} color="warning"> <span className="fa fa-plus-circle fa-lg"> Add Document</span></Button>

                        <Button type="submit" value="submit" color="success"><span className="fa fa-paper-plane fa-lg"> Apply</span></Button>
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

