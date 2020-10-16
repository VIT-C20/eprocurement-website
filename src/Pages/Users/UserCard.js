import React from 'react'
import {Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
    return (
        <div key={user._id} className="col-md-6 mt-3 mb-2">
            <Card>
                <Card.Header>{user.role}</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Link to={`/users/${user._id}`}>
                    <Button variant="primary">Go somewhere</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}
