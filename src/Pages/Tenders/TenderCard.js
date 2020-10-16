import React from 'react'
import {Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TenderCard({ tender }) {
    return (
        <div key={tender._id} className="container mt-3">
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
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        </div>
    )
}
