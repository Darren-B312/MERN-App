import React, { useState } from 'react';
import '../App.css';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Assessments from '../components/assessments';


class Subject extends React.Component {

    constructor() {
        super();
        this.deleteSubject = this.deleteSubject.bind(this);
        this.calculateGrade = this.calculateGrade.bind(this);
    }

    deleteSubject(e) {
        Axios.delete("http://localhost:4000/api/subjects/" + this.props.subject._id)
            .then(() => {
                this.props.ReloadDataMethod();
            })
            .catch();
    }

    /* calculateGrade() method
    *   -This method is fired when the user presses the "Calculate Grade" button
    *   -It is a hacky work-around to allow the user see their grade for a given SUBJECT 
    *   -This is done by iterating through the Assessments[] array, multiplying the weight & grade for a given assessment, and summing it to a total variable "grade"
    *   -An alert is then sent to the user with their grade
    *   -It would have been preferable to give each Subject object it's own grade member variable and then keep the running total stored there but I could not figure out an elegant way to implement this
    */
    calculateGrade(e) {
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
                            <Button block variant="outline-success" onClick={this.calculateGrade}>Calculate Grade</Button>
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