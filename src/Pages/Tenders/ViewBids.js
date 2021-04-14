import React, { Component } from 'react'
import BidCard from "./BidCard";
import axios from "axios";

export default class ViewBids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bids:[],
            isLoading: true
        }
    }

    componentDidMount() {
        console.log('hello component')
        axios.get(`/tender/${this.props.match.params.tenderId}/getBids`)
            .then(res => {
                console.log(res)
                this.setState({
                    bids: res.data,
                    isLoading: false
                });
                // console.log('hello world');
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.bids.length);
        return (
            <div className="container">
                {
                    (!this.state.isLoading) ? (
                        <div className="row">
                            {this.state.bids.length!==0 ? this.state.bids.map((bid) => <BidCard bid={bid}/>):<h3>No Bids applied yet...</h3>}
                        </div>
                    ) : <h4>Loading . . .</h4>
                }
            </div>
        )
    }
}
