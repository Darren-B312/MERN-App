import React from 'react';
import '../App.css';
import Subject from '../components/subject';

class Subjects extends React.Component {

    render() {
        return this.props.mySubjects.map((subject) => {
            return (
                <div className="Subjects">
                    <Subject subject={subject} ReloadDataMethod={this.props.ReloadDataMethod}></Subject>
                </div>
            );
        })
    }
}

export default Subjects