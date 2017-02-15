import React from 'react';
import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';

import Question from './Question';

let cx = classNames.bind(styles);

class Section extends React.Component {
	constructor(props) {
        super(props);
    }
    render() {
        var questions = [];
        for(var i = 0; i < this.props.sectionData.questions.length; i = i + 1){
          questions.push(
              <Question key={i} questionData={this.props.sectionData.questions[i]}  />
            );
        }
        return (
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className={this.props.sectionData.section_updated ? 'panel panel-success' : 'panel panel-default'}>
              <div className="panel-heading" role="tab" id={"heading"+this.props.sectionData.section_number}>
                <h4 className="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapse"+this.props.sectionData.section_number} aria-expanded="true" aria-controls="collapseOne">
                    {this.props.sectionData.section_number + '. ' + this.props.sectionData.section_title}
                  </a>
                </h4>
              </div>
              <div id={"collapse"+this.props.sectionData.section_number} className={this.props.sectionData.section_updated ? 'panel-collapse collapse in' : 'panel-collapse collapse'} role="tabpanel" aria-labelledby={"heading"+this.props.sectionData.section_number}>
                <div className="panel-body">
                  {questions}
                </div>
              </div>
            </div>
            </div>
        );
    }
}

export default Section;