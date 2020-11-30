import React from 'react'
import {Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
    return (
        <div key={user._id} className="col-md-5 m-4 mt-3 mb-2"
            style={{
                boxShadow:"0 1px 5px gray",
                padding:0,
                // width:"80%",
                // boxSizing:"border-box",
            }}
        >
            <Card>
                <Card.Header>{user.role}</Card.Header>
                <Card.Body>
                    <Card.Title>{user.orgName}</Card.Title>
                    <Card.Text>
                    {user.username}
                    </Card.Text>
                    <Link to={`/users/${user._id}`}>
                    <Button variant="primary">View More</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}
