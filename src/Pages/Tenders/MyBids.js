import React, { Component } from 'react'
import BidCard from './BidCard'
import axios from 'axios'

export default class MyBids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bids: [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get(`/tender/myBids/${localStorage.UserId}`)
            .then(res => {
                this.setState({
                    bids: res.data,
                    isLoading: false
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        if (!this.state.isLoading) {
            if (this.state.bids.length === 0) {
                return <div className="container">
                    <h4>No bids available currently ...</h4>
                </div>
            } else {
                return (
                    <div className="container">
                        {this.state.bids.map((bid) => <BidCard bid={bid} />)}
                    </div>
                )
            }
        } else {
            return (
                <div className="container mt-10">
                    <div className="mt-auto ml-auto">
                        <h4>Loading . . .</h4>
                    </div>
                </div>
            )
        }
    }
}
