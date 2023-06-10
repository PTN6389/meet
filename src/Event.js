import  React, { Component } from 'react';

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
        const { event } = this.props;
        
        return (
           <div className="event">
                <h3 className="summary">{event.summary}</h3>
                <p className="date">Start Date/Time: {event.start.dateTime}</p>
                <p className="link">{event.htmlLink}</p>    
                <p className="description">{event.description}</p>
                <button className="showDetails details-btn" 
                       onClick={() => this.handleShowDetails()} >Show Details</button>
                <button className="hideDetails details-btn display-none" 
                       onClick={() => this.handleHideDetails()} >Hide Details</button>
            </div>
        );
    }
}
        


export default Event;