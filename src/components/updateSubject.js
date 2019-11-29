import React from 'react';
import '../App.css';
import Axios from 'axios';

class Update extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Credits: 0,
      _id: '',
    };

    this.handleChangedSubjectTitle = this.handleChangedSubjectTitle.bind(this);    
    this.handleChangedSubjectCredits = this.handleChangedSubjectCredits.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangedSubjectTitle(e) {
    this.setState({Title: e.target.value});
  }

  handleChangedSubjectCredits(e) {
    this.setState({Credits: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const newSubject = {
        Title: this.state.Title,
        Credits: this.state.Credits
    }


    console.log(newSubject);


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
        this.setState({
          _id: response.data._id,
          Title: response.data.title,
          Credits: response.data.credits
        })
      })
      .catch();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Subject Title:</label>
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

export default Update;
