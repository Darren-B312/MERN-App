import React from 'react';
import '../App.css';
import Axios from 'axios';


import Subjects from '../components/subjects';

class Read extends React.Component {

    state = {
        Subjects: []
    };

    componentDidMount() {
        Axios.get("http://localhost:4000/api/subjects")
        .then((res) => {
            this.setState({Subjects: res.data.subjects})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="Read">
                <Subjects mySubjects={this.state.Subjects}></Subjects>
            </div>
        );
    }
}

export default Read;