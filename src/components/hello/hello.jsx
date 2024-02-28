import React from "react";

const beep = new Audio(
    "https://cdn.freesound.org/previews/560/560188_6086693-lq.mp3"
  );

export class Hello extends React.Component {   // Hello is initialized with an object containing the current date and time
    constructor() {                            // Methods are functions inside a class.  This method is called constructor
        super();                                // super() is called to inherit the properties of the parent class
        this.state = { currentDate: new Date() };    // this.state is initialized with an object containing the current date and time
    }                                           // All this code is executed when the component is created ...
    // ... but nothing is added to the DOM yet.

    // code executed right after the component is added to the DOM.
    componentDidMount() {
        setInterval(() => {
            this.setState({ currentDate: new Date() });
        }, 1000);
    }
    // code executed right after state or props are updated
    componentDidUpdate() {
        beep.play();
    }

    // code executed just before the moment the component gets removed from the DOM.
    componentWillUnmount() {
        clearInterval(this.state.interval);
        beep.pause();
    }

    render() {                                // render() method is called to display the current date and time
        return (
            <h1>
                Hello, {this.props.name}! The time is: {this.state.currentDate.toLocaleTimeString()}
            </h1>                // this.state.currentDate.toLocaleTimeString() is called to display the current time
        );
    }
}