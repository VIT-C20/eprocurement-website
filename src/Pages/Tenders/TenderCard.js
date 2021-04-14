import React from 'react'
import {Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';

export default function TenderCard({ tender }) {
    dayjs.extend(relativeTime);

    return (
        <div key={tender._id} className="container" 
        style={{
            boxShadow:"0px 1px 5px 1px grey",
            padding:"0",    
            margin:"20px auto",    
        }}
        >
        {console.log(tender)}
            <Card className="text-center">
            <Card.Header>{tender.host.orgName}</Card.Header>
            <Card.Body>
                <Card.Title>{tender.title}</Card.Title>
                <Card.Text>
                {tender.status}
                </Card.Text>
                <Link to={`/tender/${tender._id}`}>
                <Button variant="primary">View Details</Button>
                </Link>
            </Card.Body>
            <Card.Footer className="text-muted">{dayjs(tender.createdAt).fromNow()}</Card.Footer>
        </Card>
        </div>
    )
}
