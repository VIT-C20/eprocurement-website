import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import {GENERAL, OnlineEnrollment, Password, DSCRelated, TenderRelated, SecurityRelated} from '../../Utils/FAQ';
import FAQCard from './FAQCard';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


export default function FAQ() {
    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Tenders</Link></BreadcrumbItem>
                <BreadcrumbItem>FAQ</BreadcrumbItem>
            </Breadcrumb>

            <div className= "mb-2">
                <Accordion defaultActiveKey="0">

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <p className="text-left">General</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    {GENERAL.map((item) => <FAQCard key={item.id} id={item.id} question={item.question} answer={item.answer}/>)}
                                    {/* <FAQCard question="question" answer="Hello! I'm the body"/> */}
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                <p className="text-left">Online Enrollment</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    {OnlineEnrollment.map((item) => <FAQCard key={item.id} id={item.id} question={item.question} answer={item.answer}/>)}
                                    {/* <FAQCard question="question" answer="Hello! I'm the body"/> */}
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                <p className="text-left">Password</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    {Password.map((item) => <FAQCard key={item.id} id={item.id} question={item.question} answer={item.answer}/>)}
                                    {/* <FAQCard question="question" answer="Hello! I'm the body"/> */}
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                <p className="text-left">DSC Related</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    {DSCRelated.map((item) => <FAQCard key={item.id} id={item.id} question={item.question} answer={item.answer}/>)}
                                    {/* <FAQCard question="question" answer="Hello! I'm the body"/> */}
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                <p className="text-left">Tender Related</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    {TenderRelated.map((item) => <FAQCard key={item.id} id={item.id} question={item.question} answer={item.answer}/>)}
                                    {/* <FAQCard question="question" answer="Hello! I'm the body"/> */}
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="6">
                                <p className="text-left">Security Related</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    {SecurityRelated.map((item) => <FAQCard key={item.id} id={item.id} question={item.question} answer={item.answer}/>)}
                                    {/* <FAQCard question="question" answer="Hello! I'm the body"/> */}
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </div>

            
        </div>
    )
}
