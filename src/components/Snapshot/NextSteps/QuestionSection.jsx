import React from 'react';
import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';

import BestPractice from './BestPractice';

let cx = classNames.bind(styles);

class QuestionSection extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
        var bestPractices = [];
        for (var i = 0; i < this.props.questionData.best_practices.length; i++) {
            bestPractices.push(
                <BestPractice key={i} bpData={this.props.questionData.best_practices[i]} />
            );
        }
        return (
        	<div>
        		<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div className='panel panel-default'>
                  <div className="panel-heading" role="tab" id={"heading"+this.props.questionData.qn_number}>
                    <h4 className="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapse"+this.props.questionData.qn_number} aria-expanded="true" aria-controls={"collapse"+this.props.questionData.qn_number}>
                        {this.props.questionData.qn_number + '. ' + this.props.questionData.qn_title}
                      </a>
                    </h4>
                  </div>
                  <div id={"collapse"+this.props.questionData.qn_number} className='panel-collapse collapse' role="tabpanel" aria-labelledby={"heading"+this.props.questionData.qn_number}>
                    <div className="panel-body">
                      <ul>
                        {bestPractices}
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
            </div>
        );
    }
}

export default QuestionSection;