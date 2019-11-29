import React from 'react';
import '../App.css';
import Axios from 'axios';

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

        const newAssessment = {
            Name: this.state.AssessmentTitle,
            Weight: this.state.AssessmentWeight,
            Grade: this.state.AssessmentGrade
        }

        const newSubject = {
            Title: this.state.Title,
            Credits: this.state.Credits,
            OverallGrade: this.state.OverallGrade,
            Assessments: this.state.Assessments
        }

        newSubject.Assessments.push(newAssessment)

        Axios.patch("http://localhost:4000/api/subjects/" + this.state._id, newSubject)
        .then()
        .catch();

        this.setState({
            AssessmentTitle: '',
            AssessmentWeight: ''
        })
    }

    componentDidMount() {
        Axios.get('http://localhost:4000/api/subjects/' + this.props.match.params.id)
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
            <div className="CreateAssessment">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Assessment Name:</label>
                        <input type="text" className="form-control" value={this.state.AssessmentTitle} onChange={this.handleChangedAssessmentTitle} />
                    </div>
                    <div className="form-group">
                        <label>Assessment Weight:</label>
                        <input type="text" className="form-control" value={this.state.AssessmentWeight} onChange={this.handleChangedAssessmentWeight} />
                    </div>
                    <div className="form-group">
                        <label>Assessment Grade:</label>
                        <input type="text" className="form-control" value={this.state.AssessmentGrade} onChange={this.handleChangedAssessmentGrade} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CreateAssessment;