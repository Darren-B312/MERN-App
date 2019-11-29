import React from 'react';
import '../App.css';
import Axios from 'axios';

class Assessment extends React.Component {

    render() {
        return (
            <div>
                <p>Assessment: {this.props.assessment.Name}</p>
                <p>Weight: {this.props.assessment.Weight}</p>
                <p>Grade: {this.props.assessment.Grade}</p>
            </div>
        );
    }
}

export default Assessment;