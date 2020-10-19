import React from 'react';
import './css/scrollComponent.css';
import Avatar from 'react-avatar';



export default function ScrollComponent() {
    const profiles = [];
    for(var i=1;i < 50;i++){
        profiles.push("Company"+i);
    }

    return (
        <div className="container-2">
           <ul className="item-list">
                {profiles.map(val => <li><Avatar className="avatar" name={val} size="50" round={true}/>Company1</li>)}
            </ul> 
        </div>
    );
} 

