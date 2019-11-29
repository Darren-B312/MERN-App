import React from 'react';
import '../App.css';

import Assessment from '../components/assessment';

class Assessments extends React.Component {
    
    render() {
        return this.props.myAssessments.map((assessment) => {
            return (                
                <div className="Assessments">
                    <Assessment assessment={assessment}></Assessment>
                    <hr></hr>        
                </div>
            )
        })
    }
}

export default Assessments