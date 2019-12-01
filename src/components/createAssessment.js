import React from 'react';
import '../App.css';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateAssessment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            Title: '',
            Credits: 0,
            OverallGrade: 0,
            Assessments: [],
            AssessmentTitle: '',
            AssessmentWeight: 0,
            AssessmentGrade: 0,
        };

        this.handleChangedAssessmentTitle = this.handleChangedAssessmentTitle.bind(this);
        this.handleChangedAssessmentWeight = this.handleChangedAssessmentWeight.bind(this);
        this.handleChangedAssessmentGrade = this.handleChangedAssessmentGrade.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangedAssessmentTitle(e) {
        this.setState({ AssessmentTitle: e.target.value });
    }
    handleChangedAssessmentWeight(e) {
        this.setState({ AssessmentWeight: e.target.value });
    }
    handleChangedAssessmentGrade(e) {
        this.setState({ AssessmentGrade: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const newAssessment = { // create a new Assessment object
            Name: this.state.AssessmentTitle,
            Weight: this.state.AssessmentWeight,
            Grade: this.state.AssessmentGrade
        }

        const newSubject = { // re-create subject with data from state
            Title: this.state.Title,
            Credits: this.state.Credits,
            OverallGrade: this.state.OverallGrade,
            Assessments: this.state.Assessments
        }

        newSubject.Assessments.push(newAssessment) // add newly created assessment to Assessments[] array

        Axios.patch("http://localhost:4000/api/subjects/" + this.state._id, newSubject) // replace existing db Subject with new Subject which contains the newly added Assessment
            .then()
            .catch();

        this.setState({
            AssessmentTitle: '',
            AssessmentWeight: ''
        })
    }

    componentDidMount() {
        Axios.get('http://localhost:4000/api/subjects/' + this.props.match.params.id) // get the subject from db with a given id
            .then((response) => {
                this.setState({
                    _id: response.data._id,
                    Title: response.data.Title,
                    Credits: response.data.Credits,
                    Assessments: response.data.Assessments
                })
            })
            .catch();
    }

    render() {
        return (
            <div style={{ alignItems: "center", justifyContent: "center", display: "flex", padding: "15px" }} className="Create">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Assessment Title: </Form.Label>
                        <Form.Control placeholder="Lab Exam 1" type="text" className="form-control" value={this.state.AssessmentTitle} onChange={this.handleChangedAssessmentTitle} /><br></br>
                        <Form.Label>Weight: </Form.Label>
                        <Form.Control type="text" className="form-control" value={this.state.AssessmentWeight} onChange={this.handleChangedAssessmentWeight} /><br></br>
                        <Form.Label>Grade: </Form.Label>
                        <Form.Control type="text" className="form-control" value={this.state.AssessmentGrade} onChange={this.handleChangedAssessmentGrade} /><br></br>
                        <Button block variant="outline-primary" type="submit" value="Submit">Add Assessment</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default CreateAssessment;