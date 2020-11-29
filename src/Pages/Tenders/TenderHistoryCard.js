import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

// bidClosingDate: "2020-11-28T12:03"
// bidCount: "0"
// bidOpeningDate: "2020-11-29T12:03"
// bidValidity: "200"
// feePayableAt: "mumbai"
// feePayableTo: "vita4"
// host: "5fc0f9489e39a53a6f9d5a4e"
// id: "5fc340b4767b122672cb4043"
// location: "mumbaia"
// noCovers: "2"
// orgChain: "VIT"
// paymentMode: "Offline"
// periodOfWork: "200"
// pincode: "436346"
// productCategory: "worka4"
// publishDate: "2020-11-29T06:33:24.760Z"
// resultDate: "2020-11-22T12:03"
// status: "OPEN"
// tenderCategory: "work4"
// tenderFee: "34000"
// tenderKey: "TENDER3"
// tenderType: "anything4"
// title: "Python for Data Science"
// winnerBidder: ""
// winningBid: ""
// workDescription: "anything4"

export default function TenderHistoryCard(props){
    let id = props.history.TxId;
    let timeStamp = props.history.Timestamp;
    let details = props.history.Value;

    let historyKeys = [];
    let historyValues = [];

    historyKeys.push("txId");
    historyValues.push(props.history.TxId);


    for(var key in details){
        historyKeys.push(key);
        historyValues.push(details[key]);
    }

    console.log(historyKeys);
    console.log(historyValues);


    
return(
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={props.id+1} >
                    <p className="text-left">{timeStamp}</p>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.id+1}>
                <Card.Body>
                    {
                        historyKeys.map((key, i) => 

                                    (historyValues[i] === "")?
                                        <div>
                                            <b>{key}</b>: --------     
                                        </div>
                                    :
                                        <div>
                                            <b>{key}</b>:{historyValues[i]}     
                                        </div>
                        )
                    }
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}
