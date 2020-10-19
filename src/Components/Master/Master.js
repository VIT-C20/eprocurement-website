import React from 'react';
import ScrollComponent from './ScrollComponent';
import DescriptionComponent from './DescriptionComponent';
import './css/master.css';

export default function Master() {
    return (
        <div className="container-1">
            <div className="title">
                <ScrollComponent />
            </div>
            <div className="description">
                <DescriptionComponent/>
            </div>
        </div>
    );
} 