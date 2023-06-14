import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
    state = {
        eventCount: 32,
        errorText: ''
    }

    handleInputChanged = (event) => {
        const eventCount = event.target.value;
        if (eventCount < 1 || eventCount > 32) {
            this.setState({
                eventCount: eventCount,
                errorText: 'Select number from 1 to 32'
            })
        } else {
        this.setState({ eventCount: eventCount, errorText: '' });
        this.props.updateEvents(undefined, eventCount);
        }
    }

    render() {
        return (
            <div>
                <input type="number" className="numberOfEvents"
                        value={this.state.eventCount}
                        onChange={this.handleInputChanged}>
                </input>
                <ErrorAlert text={this.state.errorText} />
            </div>
        )
    }

}

export default NumberOfEvents;