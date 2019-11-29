import React from 'react';
import '../App.css';

import Subject from '../components/subject';

class Subjects extends React.Component {

    render() {
        return this.props.mySubjects.map((subject) => {
            return (
                <div className="Subjects">
                    <hr></hr>
                    <Subject subject={subject}></Subject>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            );         
        })
    }
}

export default Subjects