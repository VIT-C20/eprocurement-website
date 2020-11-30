import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
import axios from 'axios';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get('/users')
        .then(res => {
            this.setState({
                users : res.data,
                isLoading: false
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        // const users = [{
        //     role:"CEO",
        //     orgName:"Vidyalankar",
        //     orgDescription:"Institute but better not to join"
        // }]
        return (
            <div className="container">
                <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Tenders</Link></BreadcrumbItem>
                        <BreadcrumbItem>Users</BreadcrumbItem>
                </Breadcrumb>
                {
                    (!this.state.isLoading)?(
                        <div className="row" style={{boxSizing:"border-box"}}>
                        {this.state.users.map((user) => <UserCard user={user}/>)}
                        </div>
                    ): <h4>Loading . . .</h4>
                }
            </div>
        )
    }
}

