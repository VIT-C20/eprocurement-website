import React, { Component } from 'react'
import TenderCard from "./TenderCard"
import axios from 'axios'

export default class Tenders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenders : [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get('/tender')
        .then(res => {
            this.setState({
                tenders : res.data,
                isLoading:false
            })
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
    
    render() {
        if(!this.state.isLoading){
            return (
            <div>
                {this.state.tenders.map((tender) => <TenderCard tender={tender}/>)}
            </div>
            )
        } else {
            return(
                <div className="container mt-10">
                    <div className="mt-auto ml-auto">
                        <h4>Loading . . .</h4>
                    </div>
                </div>
            )
        }
        
    }
}

