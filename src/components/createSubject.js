import React from 'react';
import '../App.css';
import Axios from 'axios';

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
            title: this.state.Title,
            overallGrade: this.state.OverallGrade,
            credits: this.state.Credits
        }

        Axios.post("http://localhost:4000/api/subjects", newSubject)
            .then()
            .catch();

        this.setState({
            Title: '',
            Credits: ''
        })
    }

    render() {
        return (
            <div className="Create">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Module Title:</label>
                        <input type="text" className="form-control" value={this.state.Title} onChange={this.handleChangedSubjectTitle} />
                    </div>
                    <div className="form-group">
                        <label>Credits:</label>
                        <input type="text" className="form-control" value={this.state.Credits} onChange={this.handleChangedSubjectCredits} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CreateSubject;