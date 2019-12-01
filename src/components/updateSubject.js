import React from 'react';
import '../App.css';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Update extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Credits: 0,
            _id: '',
            OverallGrade: 0,
            Assessments: []
        };

        this.handleChangedSubjectTitle = this.handleChangedSubjectTitle.bind(this);
        this.handleChangedSubjectCredits = this.handleChangedSubjectCredits.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangedSubjectTitle(e) {
        this.setState({ Title: e.target.value });
    }

    handleChangedSubjectCredits(e) {
        this.setState({ Credits: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const newSubject = {
            Title: this.state.Title,
            Credits: this.state.Credits
        }

        Axios.patch("http://localhost:4000/api/subjects/" + this.state._id, newSubject)
            .then()
            .catch();

        this.setState({
            Title: '',
            Credits: 0
        })
    }

    componentDidMount() {
        Axios.get('http://localhost:4000/api/subjects/' + this.props.match.params.id)
            .then((response) => {
                console.log(response);
                this.setState({
                    _id: response.data._id,
                    Title: response.data.title,
                    Credits: response.data.credits,
                    Assessments: response.data.assessments
                })
            })
            .catch();
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
                        <Button block variant="outline-primary" type="submit" value="Submit">Update Module</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default Update;
