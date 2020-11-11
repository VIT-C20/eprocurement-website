import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Form, Input, Button, Label, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit : false,
            mine: false,
            userData : {}
        }
    }

    componentDidMount() {
        axios.get(this.props.match.url)
        .then(res => {
            this.setState({
                userData: res.data,
            })
            if(localStorage.UserId && res.data._id === localStorage.UserId) 
                this.setState({
                    mine: true
                })
            console.log(this.state.userData);
        })
        .catch(err => console.log(err));
    }

    

    render() {

        return (
            <div className="container">
                <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/users'>Users</Link></BreadcrumbItem>
                        <BreadcrumbItem>Profile</BreadcrumbItem>
                </Breadcrumb>

                <div className="container">

                </div>
            </div>
        )
    }
}
