import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false
    }

    handleShowDetails = () => {
        this.setState ({
            showDetails: true
        })
    }

    handleHideDetails = () => {
        this.setState ({
            showDetails: false
        })
    }

    render() {  
        const { eventDetails } = this.props;
        
        return (
           <div>
                <h3 className="summary"></h3>
                <p className="date"></p>
                <p className="link">{eventDetails.htmlLink}</p>    
                <p className="description">{eventDetails.description}</p>
                <button className="showDetails" 
                       onClick={() => this.handleShowDetails()} >Show Details</button>
                <button className="hideDetails" 
                       onClick={() => this.handleHideDetails()} >Hide Details</button>
            </div>
        );
    }
}
        


export default Event;