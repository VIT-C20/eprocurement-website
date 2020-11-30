import React, { Component } from 'react'
import { Form, Input, Label, FormGroup } from 'reactstrap';
import "./CSS/createTender.css";
import axios from 'axios';
import "./CSS/bidDetails.css";

export default class BidDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            myTender: false
        }
        this.bid = {}
    }

    componentDidMount() {
        axios.get(`/tender/${this.props.match.params.tenderId}/getBids/${this.props.match.params.bidId}`, {
            headers: {
                Authorization: localStorage.USerId
            }
        })
        .then(res => {
            this.bid = res.data
            this.setState({loading: false})
            if(res.data.tender.host === localStorage.UserId && !res.data.tender.winnerBidder) {
                this.setState({myTender: true})
            }
            console.log(this.bid)
            console.log(this.state.myTender)
        })
        .catch(err => console.log(err));
    }

    addWinnerBidder = (event) => {
        event.preventDefault()
        const payload = {
            winnerBidderId: this.props.match.params.bidId
        }
        axios.put(`/tender/${this.props.match.params.tenderId}/addWinnerBidder`, payload, {
            headers: {
                Authorization: localStorage.UserId
            }
        })
        .then(res => {
            console.log(res.data)
            alert('winner Bidder added')
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            (this.state.loading)?
            <div className="container">
                Loading ...
            </div>:
            <div className="container">
                <Form  style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "30px 10px" }}>
                    <center style={{ marginBottom: "30px" }}><h1>Bid Details</h1></center>

                    <FormGroup className="row">
                        <Label htmlFor="tenderId" className="col-4 offset-1">Tender ID</Label>
                        <Input className="col-6" type="text" id="tenderId" name="tenderId" value={this.props.match.params.tenderId} readOnly required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="profileId" className="col-4 offset-1">Your Profile ID</Label>
                        <Input className="col-6" type="text" id="profileId" name="profileId" value={this.bid.bidder._id} readOnly required />
                    </FormGroup>

                    {/* <FormGroup className="row">
                    <Label htmlFor="orgChain" className="col-4 offset-1">Organization Chain</Label>
                    <Input className="col-6" type="text" id="orgChain" name="orgChain" value={this.props.profile.orgChain} readOnly required />
                </FormGroup> */}

                    <FormGroup className="row">
                        <Label htmlFor="bidDetails" className="col-4 offset-1">Bid Details</Label>
                        <Input className="col-6" type="textarea" id="bidDetails" name="bidDetails" value={this.bid.bidDetails} readOnly required />
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="quotation" className="col-4 offset-1">Quotation</Label>
                        <Input className="col-6" type="text" id="quotation" name="quotation" value={this.bid.quotation} readOnly />
                    </FormGroup>
                    <center><h4>Quotation Documents</h4></center>
                    {
                        (this.bid.SupportingDocuments.length) ?
                            this.bid.SupportingDocuments.map((document, index) => (
                                <Form>
                                    <FormGroup className="row">
                                        <Label className="offset-1"><h6><u>Document {index + 1}</u></h6></Label>
                                    </FormGroup>
                                    <FormGroup className="row">
                                        <Label htmlFor="documentTitle" className="col-4 offset-1">Document Title</Label>
                                        <Input type="text" id="documentTitle" name="documentTitle" value={document.documentTitle} readOnly className="col-6" />
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
                                </Form>
                            ))
                            : null
                    }
                    {
                        this.state.myTender?
                        <button type="submit" onClick={this.addWinnerBidder}>Declare as Winner</button>
                        :null
                    }
                </Form>

            </div>
        )
    }
}
