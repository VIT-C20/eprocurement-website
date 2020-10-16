import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

export default function FAQCard(props){
    return(
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={props.id}>
                    <p className="text-left">{props.question}</p>
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey={props.id}>
                <Card.Body>{props.answer}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}
