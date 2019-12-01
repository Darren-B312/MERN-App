import React, {useState} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Assessments from '../components/assessments';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import CardDeck from 'react-bootstrap/CardDeck';
import Modal from 'react-bootstrap/Modal';

class Subject extends React.Component {

    constructor() {
        super();
        this.deleteSubject = this.deleteSubject.bind(this);
        this.caclculateGrade = this.caclculateGrade.bind(this);
    }

    deleteSubject(e) {
        Axios.delete("http://localhost:4000/api/subjects/" + this.props.subject._id)
            .then(() => {
                this.props.ReloadDataMethod();
            })
            .catch();
    }

    caclculateGrade(e) {




        var grade = 0;
        for (var i = 0; i < this.props.subject.Assessments.length; i++) {

            if (!isNaN(this.props.subject.Assessments[i].Grade)) {

                var g = parseFloat(this.props.subject.Assessments[i].Grade) * parseFloat(this.props.subject.Assessments[i].Weight);

                grade += g;
            }
        }
        alert(this.props.subject.Title + " grade: " + grade.toFixed(2) + "%");

    }



    render() {
        return (
            <div style={{ width: '18rem' }} className="Subject">
                <Card>
                <Card.Header><b>{this.props.subject.Title}{" - " + this.props.subject.Credits + " Credits"}</b> </Card.Header>
                    <Card.Body>
                        <Assessments myAssessments={this.props.subject.Assessments}></Assessments>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                            <div >
                                <Button block variant="outline-success" onClick={this.caclculateGrade}>Calculate Grade</Button>
                                <Button block variant="outline-primary" href={"/createAssessment/" + this.props.subject._id}>Add Assessment</Button>
                                <Button block variant="outline-primary" href={"/updateSubject/" + this.props.subject._id}>Update Module</Button>
                                <Button block variant="outline-danger" onClick={this.deleteSubject}>Delete Module</Button>
                            </div>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default Subject;