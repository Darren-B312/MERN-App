import React from 'react';
import '../App.css';
import Axios from 'axios';


import Subjects from '../components/subjects';

class Read extends React.Component {
    constructor() {
        super();
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
    }

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

    ReloadDataMethod() {
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
                <Subjects mySubjects={this.state.Subjects} ReloadDataMethod={this.ReloadDataMethod}></Subjects>
            </div>
        );
    }
}

export default Read;