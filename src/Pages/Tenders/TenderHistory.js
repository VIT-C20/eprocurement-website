import React, { Component } from 'react'
import {Accordion, Card, Button} from 'react-bootstrap';
import TenderHistoryCard from './TenderHistoryCard';
import axios from 'axios'
// const history_list = [
//     {
//         id:1,
//         content:'something here ... '  
//     },
//     {
//         id:2,
//         content:'something here ... ' 
//     },
//     {
//         id:3,
//         content:'something here ... ' 
//     }
// ];

export default class TenderHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
        this.history = []
    }

    componentDidMount() {
        console.log('history')
        axios.get(`/tender/getHistory/${this.props.match.params.tenderId}`)
        .then(res => {
            this.history = res.data
            console.log(this.history)
            this.setState({loading: false})
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            (this.state.loading)?
            <div>
                Loading ...
            </div>
            :
            <Accordion defaultActiveKey="1">
                <Card>
                    <Card.Header>
                        <Accordion as={Button} 
                        style={{textDecoration:"none",fontWeight:"900",fontSize:"1.5em"}} 
                        variant="link" eventKey="1">
                            <p className="text-left" >Tender ID : {this.props.match.params.tenderId} </p>
                        </Accordion>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Accordion defaultActiveKey="0">
                                {this.history.map((item, index) => <TenderHistoryCard key={index} id={index} history={item} />)}
                                {/* {this.history.map(item => console.log(item))} */}
                            </Accordion>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        )
    }
}
