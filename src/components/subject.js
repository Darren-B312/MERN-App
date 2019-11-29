import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Assessments from '../components/assessments';

class Subject extends React.Component {

    constructor() {
        super();
        this.deleteSubject = this.deleteSubject.bind(this);
    }

    deleteSubject(e) {
        Axios.delete("http://localhost:4000/api/subjects/" + this.props.subject._id)
        .then()
        .catch();
    }


    render() {
        return (
            <div className="Subject">
                <b><u><p>Subject Title: {this.props.subject.Title}</p></u></b>
                <b><p>Overall Grade: {this.props.subject.OverallGrade}</p></b>
                <b><p>Credits: {this.props.subject.Credits}</p></b>
                <hr></hr>
                <Assessments myAssessments={this.props.subject.Assessments}></Assessments>
                <hr></hr>
                <Link to={"/updateSubject/" + this.props.subject._id} className="btn btn-primary">Edit Subject</Link><br></br>
                <Link to={"/createAssessment/" + this.props.subject._id} className="btn btn-primary">Add Assessment</Link><br></br>
                <button onClick={this.deleteSubject}>Delete Subject</button>
            </div>
        );
    }
}

export default Subject;