import React, { Component } from 'react'
import {Accordion, Card, Button} from 'react-bootstrap';
import TenderHistoryCard from './TenderHistoryCard';

const history_list = [
    {
        id:1,
        content:'something here ... '  
    },
    {
        id:2,
        content:'something here ... ' 
    },
    {
        id:3,
        content:'something here ... ' 
    }
];

export default class TenderHistory extends Component {
    

    render() {
        return (

            <Accordion defaultActiveKey="1">
                <Card>
                    <Card.Header>
                        <Accordion as={Button} variant="link" eventKey="0">
                            <p className="text-left">9856 - Tender Name</p>
                        </Accordion>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Accordion>
                                {history_list.map((item) => <TenderHistoryCard key={item.id} id={item.id}/>)}
                            </Accordion>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        )
    }
}
