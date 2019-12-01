import React from 'react';
import '../App.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

import Subject from '../components/subject';
import CardDeck from 'react-bootstrap/CardDeck';

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