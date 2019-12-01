import React from 'react';
import '../App.css';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateSubject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Credits: 0,
            OverallGrade: 0,
            Assessments: []
        }

        this.handleChangedSubjectTitle = this.handleChangedSubjectTitle.bind(this);
        this.handleChangedSubjectCredits = this.handleChangedSubjectCredits.bind(this);
        this.handleChangedSubjectOverallGrade = this.handleChangedSubjectOverallGrade.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangedSubjectTitle(e) {
        this.setState({ Title: e.target.value });
    }
    handleChangedSubjectCredits(e) {
        this.setState({ Credits: e.target.value });
    }
    handleChangedSubjectOverallGrade(e) {
        this.setState({ OverallGrade: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const newSubject = {
            title: this.state.Title,
            credits: this.state.Credits,
            overallGrade: this.state.OverallGrade
        }

        Axios.post("http://localhost:4000/api/subjects", newSubject)
            .then()
            .catch();

        this.setState({
            Title: '',
            Credits: '',
            OverallGrade: 0
        })
    }

    render() {
        return (
            <div style={{ alignItems: "center", justifyContent: "center", display: "flex", padding: "15px" }} className="Create">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Module Title: </Form.Label>
                        <Form.Control placeholder="Operating Systems" type="text" className="form-control" value={this.state.Title} onChange={this.handleChangedSubjectTitle} /><br></br>
                        <Form.Label>Credits: </Form.Label>
                        <Form.Control type="text" className="form-control" value={this.state.Credits} onChange={this.handleChangedSubjectCredits} /><br></br>
                        <Button block variant="outline-primary" type="submit" value="Submit">Create Module</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default CreateSubject;