import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
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
            mine: false,
            userData : {}
        }
        this.user = {...user}
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

    // userId: '1',
    // username: 'KetanMankar',
    // password: '123456',
    // companyEmail: 'mankarKetan@gmail.com',
    // role: 'Bidder',
    // companyName: 'Vidyalankar',
    // companyDetails: 'Institute',
    // address: 'Wadala',
    // city: 'Mumbai',
    // state: 'Maharashtra',
    // postalCode: '400032',
    // contactName: 'Ketan Mankar',
    // designation: 'CEO',
    // contactNo: '9876543210',
    // PANno: '123-456-789',
    // establishedDate: '12-12-2012'
    
    render() {
        
        return (
            <div className="container">
                <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/users'>Users</Link></BreadcrumbItem>
                        <BreadcrumbItem>Profile</BreadcrumbItem>
                </Breadcrumb>

                <div className="profile-container">
                    <div className="profile-header">
                        <div className="org-profile-image">
                            <img src={no_img} alt="no-img" />
                        </div>

                        <div className="org-details">
                            <h2>Org Name</h2>
                            <p>Organization Role</p>
                            <p>established date</p>
                            <a  href="/">email-id</a>
                        </div>
                    </div>
                    
                    <div className="org-details">
                        <h2>Description</h2>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
                        
                    </div>

                    <div className="work-exp">
                        <p>Work title</p>
                        <p>Work Description</p>
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

                    <div>
                        <p>doc title</p>
                        <p>doc description</p>
                        <p>doc link</p>
                    </div>
                </div>
                </div>
                   
        )
    }
}
