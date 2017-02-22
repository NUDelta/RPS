import React from 'react';
import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';
import next_steps_array from '../../../data/next_steps_kapil.json';

import QuestionSection from './QuestionSection';
import Input from './Input';
import SuggestedFocus from './SuggestedFocus';

let cx = classNames.bind(styles);

class NextSteps extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          next_steps: next_steps_array['next_steps_array'],
          suggestedFocuses: []
        };
    }

    addSuggestedFocus(text) {
        this.setState({
            suggestedFocuses: this.state.suggestedFocuses.concat(
                <SuggestedFocus text={text} key={this.state.suggestedFocuses.length}/>
            )
        });
    }

    render() {
        var questions = [];

        for (var i = 0; i < this.state.next_steps.length; i++) {
            questions.push(
                <QuestionSection key={i} questionData={this.state.next_steps[i]} />
            )
        }

        return (
        	<div>
                {questions}
                {this.state.suggestedFocuses}
                <Input addSuggestedFocus={this.addSuggestedFocus.bind(this)}/>
            </div>
        );
    }
}

export default NextSteps;