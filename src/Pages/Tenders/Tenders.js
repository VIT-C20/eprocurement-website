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
        })
        .catch(err => console.log(err))
    }
    
    render() {
        if(!this.state.isLoading){
            if(this.state.tenders.length === 0){
                return <div className="container">
                    <h4>No tenders available currently ...</h4>
                </div>
            }else{
                return (
                    <div style={{margin:"10px",boxSizing:"border-box"}}>
                        {this.state.tenders.map((tender) => <TenderCard tender={tender}/>)}
                    </div>
                )
            }
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

