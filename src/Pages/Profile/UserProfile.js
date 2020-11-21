import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Form , FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Link } from 'react-router-dom'
import './CSS/userProfile.css';
// import axios from 'axios'
import {user} from '../../Utils/userExample';
import no_img from "./no-img.png";

export default class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit : false,
            mine: true,
            userData : {},
            isModalOpen: false
        }
        this.user = {...user}
        this.workExp = []
        this.work = {
            workTitle: '',
            workDescription: ''
        }
        this.licenses = [1, 2]
        this.license = {
            licenseTitle: '',
            licenseIssuedBy: '',
            licenseIssuedDate: '',
            licenseExpiryDate: '',
            licenseUrl: ''
        }
    }

    // componentDidMount() {
    //     axios.get(this.props.match.url)
    //     .then(res => {
    //         this.setState({
    //             userData: res.data,
    //         })
    //         if(localStorage.UserId && res.data._id === localStorage.UserId) 
    //             this.setState({
    //                 mine: true
    //             })
    //         console.log(this.state.userData);
    //     })
    //     .catch(err => console.log(err));
    // }
    
    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    render() {
        return (
            <div className="container">
                <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/users'>Users</Link></BreadcrumbItem>
                        <BreadcrumbItem>Profile</BreadcrumbItem>
                </Breadcrumb>
                <div className="profile-container">
                {
                    !this.state.edit?
                        <div>
                            <div className="profile-header">
                                <div className="org-profile-image">
                                    <img src={no_img} alt="no-img" />
                                </div>

                                <div className="org-details">
                                    <h2>Org Name</h2>
                                    <h5>Username</h5>
                                    <p>Organization Role</p>
                                    <p>established date</p>
                                    <a  href="/">email-id</a>
                                </div>
                                {
                                    this.state.mine?
                                    <div>
                                        <Button onClick={() => {this.setState({edit: true})}}>Edit</Button>
                                    </div>
                                    :null
                                }
                                
                            </div>
                        
                            <div className="org-details">
                                <h2>Description</h2>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
                                
                            </div>

                            <div className="profile-footer">
                                <div className="address">
                                    <h3>Address</h3>
                                    <span><b>Place</b>Mumbai</span>
                                    <span><b>Place</b>Mumbai</span>
                                    <span><b>Place</b>Mumbai</span>
                                </div>

                                <div className="contact-details">
                                    <h3>Contact Details</h3>
                                    <span><b>Phone no. :</b>98765432130</span>
                                    <span><b>PAN no. </b>123-456-789</span>
                                    <span><b>e-mail :</b>something@gmail.com</span>
                                </div>
                            </div>

                        </div>
                    :
                    <div className="editForm">
                        <div className="row mb-3">
                            <h3>Edit Profile</h3>
                            <Button onClick={() => window.location.reload(false)} color="danger">Cancel</Button>
                        </div>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup className="row">
                                <Label htmlFor="orgName" className="col-4 offset-1">Organization Chain</Label>
                                <Input className="col-6" type="text" id="orgName" name="orgName" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="orgDescription" className="col-4 offset-1">Organization Description</Label>
                                <Input className="col-6" type="textarea" id="orgDescription" name="orgDescription" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="establishedDate" className="col-4 offset-1">Established Date</Label>
                                <Input className="col-6" type="date" id="establishedDate" name="establishedDate" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="address" className="col-4 offset-1">Address</Label>
                                <Input className="col-6" type="text" id="address" name="address" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="city" className="col-4 offset-1">City</Label>
                                <Input className="col-6" type="text" id="city" name="city" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="state" className="col-4 offset-1">State</Label>
                                <Input className="col-6" type="text" id="state" name="state" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="postal Code" className="col-4 offset-1">Postal Code</Label>
                                <Input className="col-6" type="text" id="postal Code" name="postal Code" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="contactName" className="col-4 offset-1">Contact Name</Label>
                                <Input className="col-6" type="text" id="contactName" name="contactName" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="designation" className="col-4 offset-1">designation</Label>
                                <Input className="col-6" type="text" id="designation" name="designation" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="contactNo" className="col-4 offset-1">Contact No</Label>
                                <Input className="col-6" type="text" id="contactNo" name="contactNo" onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup className="row">
                                <Label htmlFor="PANno" className="col-4 offset-1">PAN no</Label>
                                <Input className="col-6" type="text" id="PANno" name="PANno" onChange={this.handleChange} required />
                            </FormGroup>

                            <Button type="submit" color="success">Update</Button>
                        </Form>
                    </div>
                }
                <h4>Licenses</h4>
                    {
                        (this.licenses.length)?
                        this.licenses.map((document, index) => (
                            <div>
                                <h5>Document {index + 1}</h5>
                                <div className="row">
                                    <h6 className="col-4 offset-1">Document Title</h6>
                                    <p className="col-6">{document.documentTitle}</p>
                                </div>

                                <div className="row">
                                    <h6 className="col-4 offset-1">Document Description</h6>
                                    <p className="col-6">{document.documentDescription}</p>
                                </div>

                                <div className="row">
                                    <h6 className="col-4 offset-1">Document Link</h6>
                                    <a href={document.documentLink}>{document.documentLink}</a>
                                </div>

                                {
                                    this.state.mine?
                                    <Button type="submit" value="remove" color="danger" onClick={(event) => {
                                    event.preventDefault();
                                    this.removeDocument(index);
                                    }}><span className="fa fa-trash"> Remove</span></Button>
                                    :null
                                }
                                <hr/>
                            </div>
                        ))
                        :null
                    }
                    {
                        this.state.mine ?
                        <Button onClick={this.toggleModal} color="warning" > <span className="fa fa-plus-circle fa-lg"> Add Document</span></Button>
                        :null
                    }
                    <h4>Work Experience</h4>
                    {
                        (this.licenses.length)?
                        this.licenses.map((document, index) => (
                            <div>
                                <h5>Document {index + 1}</h5>
                                <div className="row">
                                    <h6 className="col-4 offset-1">Document Title</h6>
                                    <p className="col-6">{document.documentTitle}</p>
                                </div>

                                <div className="row">
                                    <h6 className="col-4 offset-1">Document Description</h6>
                                    <p className="col-6">{document.documentDescription}</p>
                                </div>

                                <div className="row">
                                    <h6 className="col-4 offset-1">Document Link</h6>
                                    <a href={document.documentLink}>{document.documentLink}</a>
                                </div>

                                {
                                    this.state.mine?
                                    <Button type="submit" value="remove" color="danger" onClick={(event) => {
                                    event.preventDefault();
                                    this.removeDocument(index);
                                    }}><span className="fa fa-trash"> Remove</span></Button>
                                    :null
                                }
                                <hr/>
                            </div>
                        ))
                        :null
                    }
                    {
                        this.state.mine ?
                        <Button onClick={this.toggleModal} color="warning" > <span className="fa fa-plus-circle fa-lg"> Add Document</span></Button>
                        :null
                    }
                </div>

                {/* Modal add license */}
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
                {/* Modal add exp */}
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
