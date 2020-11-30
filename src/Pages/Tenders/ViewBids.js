import React, { Component } from 'react'
import BidCard from "./BidCard";
import axios from "axios";

export default class ViewBids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bids: [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get(`/tender/${this.props.match.params.tenderId}/getBids`)
            .then(res => {
                this.setState({
                    bids: res.data,
                    isLoading: false
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                {
                    (!this.state.isLoading) ? (
                        <div className="row">
                            {this.state.bids.map((bid) => <BidCard bid={bid} />)}
                        </div>
                    ) : <h4>Loading . . .</h4>
                }
            </div>
        )
    }
}
