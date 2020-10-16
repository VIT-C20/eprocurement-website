import React, { Component } from 'react'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class TenderDetails extends Component {
    render() {
        return (
            <div className="container">
                <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Tenders</Link></BreadcrumbItem>
                        <BreadcrumbItem>Tender Details</BreadcrumbItem>
                </Breadcrumb>
            </div>
        )
    }
}
