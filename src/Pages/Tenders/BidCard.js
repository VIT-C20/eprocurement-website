import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BidCard({ bid }) {
    return (
        <div key={bid._id} className="col-md-6 mt-3 mb-2">
            <Card>
                {console.log(bid)}
                <Card.Header>
                    <Card.Title>{bid.bidder.orgName}</Card.Title>
                </Card.Header>
                <Card.Body>
                    {/* <Card.Title>{bid.bidder.orgName}</Card.Title> */}
                    <Card.Text>
                        {bid.bidder.username}
                    </Card.Text>
                    <Link to={`/tender/${bid.tender}/appliedBid/${bid._id}`}>
                        <Button variant="primary">View More</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}
