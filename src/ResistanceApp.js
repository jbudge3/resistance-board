import React, { Component } from 'react';
import './styles/resistance-app.css';

class ResistanceApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: "welcome",
        };
    }

    render() {
        return (
            <div className="ResistanceAppContainer">
            </div>
        );
    }
}

export default ResistanceApp;
