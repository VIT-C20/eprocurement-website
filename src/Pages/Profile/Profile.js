import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editable : false
        }
    }

    componentDidMount() {
        axios.get(this.props.match.url)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Tenders</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/users'>Users</Link></BreadcrumbItem>
                        <BreadcrumbItem>Profile</BreadcrumbItem>
                </Breadcrumb>
            </div>
        )
    }
}
