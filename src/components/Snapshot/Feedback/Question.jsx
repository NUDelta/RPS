import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Question extends React.Component {
	constructor(props) {
        super(props);
    }
    render() {
      var question_color = null;
      if(this.props.questionData.question_updated){
        question_color = {color:'green'}
      } else {
        question_color = {color:'black'}
      }
        return (
          <div>
            <h4 style={question_color}>
              <span className="badge">{this.props.questionData.question_confidence}</span>
              {'  Qn '+this.props.questionData.question_number + ': '+ this.props.questionData.question_text}
            </h4>
            <p> <ReactMarkdown source={this.props.questionData.question_answers}/></p>
          </div>
        );
    }
}

export default Question;