import React, { Component } from 'react';

class Event extends Component {
    render() {
        const eventDetails = this.props;
    
    

        handleShowDetails() {
            alert('show details');
        }

        return (
            <div>
                <h3 className="summary">{eventDetails.summary}</h3>
                <p className="date"></p>
                <p className="link"></p>
                <p className="description"></p>
                <button className="showDetails" 
                        onClick={this.handleShowDetails}></button>
            </div>
        )
    }
}

export default Event;