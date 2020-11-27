import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

import { Link } from "react-router-dom";
import "./CSS/userProfile.css";
import axios from "axios";
// import { user } from "../../Utils/userExample";
import no_img from "./no-img.png";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      mine: false,
      userData: {},
      isModalOpen: false,
      isLicenseModalOpen: false,
      isExperienceModalOpen: false,
      loading: true
    };
    this.editedData = {};
    this.experience = {}
    this.license = {};
  }

  componentDidMount() {
    axios
      .get(this.props.match.url)
      .then((res) => {
        this.setState({
          userData: res.data,
          loading: false
        });
        if (localStorage.UserId && res.data._id === localStorage.UserId)
          this.setState({
            mine: true,
          });
        console.log(this.state.userData);
      })
      .catch((err) => console.log(err));
  }

  toggleLicenseModal = () => {
    this.setState({ isLicenseModalOpen: !this.state.isLicenseModalOpen });
  };

  toggleExperienceModal = () => {
    this.setState({ isExperienceModalOpen: !this.state.isExperienceModalOpen });
  };

  handleChange = (event) => {
    this.editedData[event.target.name] = event.target.value;
  };

  handleAddLicense = (event) => {
    this.license[event.target.name] = event.target.value;
  }

  addLicense = (event) => {
    event.preventDefault()
    console.log(this.license)
    axios.post("/users/licenses", this.license, {
      headers: {
        Authorization: localStorage.IdToken,
      },
    })
    .then(res => {
      console.log(res.data)
      this.toggleLicenseModal()
      this.componentDidMount()
    })
    .catch(err => console.log(err))
  }
  
  removeLicense = (id) => {
    axios.delete(`/users/licenses/${id}`, {
      headers: {
        Authorization: localStorage.IdToken,
      },
    })
    .then(res => this.componentDidMount())
    .catch(err => console.log(err))
  }

  handleAddExperience = (event) => {
    this.experience[event.target.name] = event.target.value;
  }

  addExperience = (event) => {
    event.preventDefault()
    console.log(this.experience)
    axios.post("/users/experience", this.experience, {
      headers: {
        Authorization: localStorage.IdToken,
      },
    })
    .then(res => {
      console.log(res.data)
      this.toggleExperienceModal()
      this.componentDidMount()
    })
    .catch(err => console.log(err))
  }
  
  removeExperience = (id) => {
    axios
      .delete(`/users/experience/${id}`, {
        headers: {
          Authorization: localStorage.IdToken,
        },
      })
      .then((res) => this.componentDidMount())
      .catch((err) => console.log(err));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.editedData);
    axios
      .put("/users/editProfile", this.editedData, {
        headers: {
          Authorization: localStorage.IdToken,
        },
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  render() {
    if(this.state.loading){
      return(
        <div>
          <h1>Loading . . .</h1>
        </div>
      ) 
    }
    else
    return (
      <div className="container">
        {/* Breadcrumb on top */}
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/users">Users</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Profile</BreadcrumbItem>
        </Breadcrumb>

        <div className="profile-container">
          {!this.state.edit ? (
            <div>
              <div className="profile-header">
                <div className="org-profile-image">
                  <img src={no_img} alt="no-img" />
                </div>

                <div className="org-details">
                  <h2>{this.state.userData.orgName}</h2>
                  <h5>{this.state.userData.username}</h5>
                  <p>{this.state.userData.role}</p>
                  <p>{this.state.userData.establishedDate}</p>
                  <a href="/">{this.state.userData.companyEmail}</a>
                </div>

                {this.state.mine ? (
                  <div className="edit-btn">
                    <Button
                      onClick={() => {
                        this.setState({ edit: true });
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                ) : null}
              </div>

              <hr />
              <div className="org-description">
                <h2>Description</h2>
                <p>{this.state.userData.orgDescription}</p>
              </div>

              <div className="profile-footer">
                <div className="address">
                  <h3>Address</h3>
                  <span>
                    <b>{this.state.userData.address}</b>
                  </span>
                  <span>
                    <b>
                      {this.state.userData.city}, {this.state.userData.state}
                    </b>
                  </span>
                  <span>
                    <b>{this.state.userData.postalCode}</b>
                  </span>
                </div>

                <div className="contact-details">
                  <h3>Contact Details</h3>

                  <div className="contact">
                    <div className="contact-labels">
                      <p>Contact Name: </p>
                      <p>Designation: </p>
                      <p>Phone no.: </p>
                      <p>PAN no. </p>
                      <p>e-mail :</p>
                    </div>
                    <div className="contact-values">
                      <p>{this.state.userData.contactName}</p>
                      <p>{this.state.userData.designation}</p>
                      <p>{this.state.userData.contactNo}</p>
                      <p>{this.state.userData.PANno}</p>
                      <p>{this.state.userData.companyEmail}</p>
                    </div>
                  </div>
                </div>
                
              </div>
              <hr/>
            </div>
          ) : (
            <div className="editForm">
              <div className="editForm-header">
                <h3>Edit Profile</h3>

                <Button
                  onClick={() => this.setState({ edit: false })}
                  color="danger"
                >
                  Cancel
                </Button>
              </div>

              <Form onSubmit={this.handleSubmit}>
                <FormGroup className="row">
                  <Label htmlFor="orgName" className="col-4 offset-1">
                    Organization Chain
                  </Label>
                  <Input
                    className="col-6"
                    type="text"
                    id="orgName"
                    name="orgName"
                    onChange={this.handleChange}
                    defaultValue={this.state.userData.orgName}
                    required
                  />
                </FormGroup>

                <FormGroup className="row">
                  <Label htmlFor="orgDescription" className="col-4 offset-1">
                    Organization Description
                  </Label>
                  <Input
                    className="col-6"
                    type="textarea"
                    id="orgDescription"
                    name="orgDescription"
                    onChange={this.handleChange}
                    defaultValue={this.state.userData.orgDescription}
                    required
                  />
                </FormGroup>

                <FormGroup className="row">
                  <Label htmlFor="establishedDate" className="col-4 offset-1">
                    Established Date
                  </Label>
                  <Input
                    className="col-6"
                    type="date"
                    id="establishedDate"
                    name="establishedDate"
                    onChange={this.handleChange}
                    defaultValue={this.state.userData.establishedDate}
                  />
                </FormGroup>

                <FormGroup className="row">
                  <Label htmlFor="address" className="col-4 offset-1">
                    Address
                  </Label>
                  <Input
                    className="col-6"
                    type="text"
                    id="address"
                    name="address"
                    onChange={this.handleChange}
                    defaultValue={this.state.userData.address}
                    required
                  />
                </FormGroup>

                <FormGroup className="row">
                  <Label htmlFor="city" className="col-4 offset-1">
                    City
                  </Label>
                  <Input
                    className="col-6"
                    type="text"
                    id="city"
                    name="city"
                    onChange={this.handleChange}
                    defaultValue={this.state.userData.city}
                    required
                  />
                </FormGroup>

                <FormGroup className="row">
                  <Label htmlFor="state" className="col-4 offset-1">
                    State
                  </Label>
                  <Input
                    className="col-6"
                    type="text"
                    id="state"
                    name="state"
                    onChange={this.handleChange}
                    defaultValue={this.state.userData.state}
                    required
                  />
                </FormGroup>

                <FormGroup className="row">
                  <Label htmlFor="postalCode" className="col-4 offset-1">
                    Postal Code
                  </Label>
                  <Input
                    className="col-6"
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    onChange={this.handleChange}
                    defaultValue={this.state.userData.postalCode}
                    required
                  />
                </FormGroup>

                <FormGroup className="row">
                  <Label htmlFor="contactName" className="col-4 offset-1">
                    Contact Name
                  </Label>
                  <Input
                    className="col-6"
                    type="text"
                    id="contactName"
                    name="contactName"
                    onChange={this.handleChange}
                    defaultValue={this.state.userData.contactName}
                    required
                  />
                </FormGroup>

                <FormGroup className="row">
                  <Label htmlFor="designation" className="col-4 offset-1">
                    designation
                  </Label>
                  <Input
                    className="col-6"
                    type="text"
                    id="designation"
                    name="designation"
                    onChange={this.handleChange}
                    defaultValue={this.state.userData.designation}
                    required
                  />
                </FormGroup>

                <FormGroup className="row">
                  <Label htmlFor="contactNo" className="col-4 offset-1">
                    Contact No
                  </Label>
                  <Input
                    className="col-6"
                    type="text"
                    id="contactNo"
                    name="contactNo"
                    onChange={this.handleChange}
                    defaultValue={this.state.userData.contactNo}
                    required
                  />
                </FormGroup>

                <FormGroup className="row">
                  <Label htmlFor="PANno" className="col-4 offset-1">
                    PAN no
                  </Label>
                  <Input
                    className="col-6"
                    type="text"
                    id="PANno"
                    name="PANno"
                    onChange={this.handleChange}
                    defaultValue={this.state.userData.PANno}
                    required
                  />
                </FormGroup>

                <center>
                  <Button type="submit" color="success">
                    Update
                  </Button>
                </center>
              </Form>
            </div>
          )}
          <div className="licenses">
            <h4>Licenses</h4>
            {this.state.userData.licenses.length
              ? this.state.userData.licenses.map((license, index) => (
                  <div className="license-docs">
                    <h5>License {index + 1}</h5>

                    <div className="license-container">
                      <div className="license-label">
                        <p>License Title:</p>
                        <p>License Issued By:</p>
                        <p>License Issued Date:</p>
                        <p>License Expiry Date:</p>
                        <p>License Link:</p>
                      </div>
                      <div className="license-value">
                        <p>{license.licenseTitle}</p>
                        <p>{license.licenseIssuedBy} IssuedBy</p>
                        <p>{license.licenseIssuedDate} IssuedDate</p>
                        <p>{license.licenseExpiryDate} ExpiryDate</p>
                        <p>
                          <a href={license.licenseLink}>
                            {license.licenseLink}
                          </a>
                        </p>
                      </div>
                    </div>

                    {this.state.mine ? (
                      <Button
                        type="submit"
                        value="remove"
                        color="danger"
                        onClick={(event) => {
                          event.preventDefault();
                          this.removeLicense(license._id);
                        }}
                      >
                        <span className="fa fa-trash"> Remove</span>
                      </Button>
                    ) : null}
                    <hr />
                  </div>
                ))
              : null}
          </div>
          {/*Licenses*/}
          {this.state.mine ? (
            <center>
              <Button onClick={this.toggleLicenseModal} color="warning">
                <span className="fa fa-plus-circle fa-lg"> Add License</span>
              </Button>
            </center>
          ) : null}
          <div className="work-experience">
            <h4>Work Experience</h4>

            {this.state.userData.workExperience.length
              ? this.state.userData.workExperience.map((work, index) => (
                  <div>
                    <h5>Work {index + 1}</h5>
                    <div className="work-exp-container">
                    <div className="work-exp-label">
                      <p>Work Title:</p>
                      <p>Work Description:</p>
                    </div>

                    <div>
                      <p>{work.workTitle}</p>
                      <p>{work.workDescription}</p>
                    </div>
                    </div>


                    {this.state.mine ? (
                      <Button
                        type="submit"
                        value="remove"
                        color="danger"
                        onClick={(event) => {
                          event.preventDefault();
                          this.removeExperience(work._id);
                        }}
                      >
                        <span className="fa fa-trash"> Remove</span>
                      </Button>
                    ) : null}
                    <hr />
                  </div>
                ))
              : null}
            {this.state.mine ? (
              <center>
                <Button onClick={this.toggleExperienceModal} color="warning">
                  {" "}
                  <span className="fa fa-plus-circle fa-lg"> Add Experience</span>
                </Button>
              </center>
            ) : null}
          </div>
        </div>
        {/* Profile-container close */}
        {/* Modal add license */}
        <Modal
          isOpen={this.state.isLicenseModalOpen}
          toggle={this.toggleLicenseModal}
        >
          <ModalHeader toggle={this.toggleLicenseModal}>
            Add License
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.addLicense}>
              <FormGroup>
                <Label htmlFor="licenseTitle">License Title</Label>
                <Input
                  type="text"
                  id="licenseTitle"
                  name="licenseTitle"
                  onChange={this.handleAddLicense}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="licenseIssuedBy">License Issued By</Label>
                <Input
                  type="text"
                  id="licenseIssuedBy"
                  name="licenseIssuedBy"
                  onChange={this.handleAddLicense}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="licenseIssuedDate">License Issued Date</Label>
                <Input
                  type="date"
                  id="licenseIssuedDate"
                  name="licenseIssuedDate"
                  onChange={this.handleAddLicense}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="licenseExpiryDate">
                  License Expiry Date (Not required if no expiry)
                </Label>
                <Input
                  type="date"
                  id="licenseExpiryDate"
                  name="licenseExpiryDate"
                  onChange={this.handleAddLicense}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="licenseLink">License Link</Label>
                <Input
                  type="text"
                  id="licenseLink"
                  name="licenseLink"
                  onChange={this.handleAddLicense}
                />
              </FormGroup>
              <Button type="submit" value="submit" color="success">
                Add
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        {/* Modal add exp */}
        <Modal
          isOpen={this.state.isExperienceModalOpen}
          toggle={this.toggleExperienceModal}
        >
          <ModalHeader toggle={this.toggleExperienceModal}>
            {" "}
            Add Work Experience
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.addExperience}>
              <FormGroup>
                <Label htmlFor="workTitle">Work Title</Label>
                <Input
                  type="text"
                  id="workTitle"
                  name="workTitle"
                  onChange={this.handleAddExperience}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="workDescription">Work Description</Label>
                <Input
                  type="textarea"
                  id="workDescription"
                  name="workDescription"
                  onChange={this.handleAddExperience}
                  required
                />
              </FormGroup>

              <Button type="submit" value="submit" color="success">
                Add
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
