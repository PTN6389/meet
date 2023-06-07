import react, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        numberDisplayed: 32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ numberDisplayed: value });
    }

    render() {
        return (
            <div>
                <input type="number" className="numberDisplayed"
                        value={this.state.numberDisplayed}
                        onChange={this.handleInputChanged}></input>
            </div>
        )
    }

}

export default NumberOfEvents;