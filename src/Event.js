import React, { Component } from 'react';

class Event extends Component {
    render() {
        return (
            <div>
                <h3 className="summary"></h3>
                <p className="date"></p>
                <p className="link"></p>
                <p className="description"></p>
            </div>
        )
    }
}

export default Event;