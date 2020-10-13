import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import {GENERAL} from '../../Utils/FAQ';
import FAQCard from './FAQCard';




export default function FAQ() {
    return (
        <div>
            
           <Accordion defaultActiveKey="0">
                {GENERAL.map((item) => <FAQCard key={item.id} id={item.id} question={item.question} answer={item.answer}/>)}
                {/* <FAQCard question="question" answer="Hello! I'm the body"/> */}
            </Accordion>
        </div>
    )
}
