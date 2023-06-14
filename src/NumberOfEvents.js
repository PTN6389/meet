import react, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        eventCount: 32
    }

    handleInputChanged = (event) => {
        const eventCount = event.target.value;
        this.setState({ eventCount: eventCount });
        this.props.updateEvents(undefined, eventCount);
    }

    render() {
        return (
            <div>
                <input type="number" className="numberOfEvents"
                        value={this.state.eventCount}
                        onChange={this.handleInputChanged}></input>
            </div>
        )
    }

}

export default NumberOfEvents;