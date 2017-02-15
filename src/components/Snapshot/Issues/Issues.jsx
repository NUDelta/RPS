import React from 'react';
import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';
import issues from '../../../data/issues_test.json';

let cx = classNames.bind(styles);

class Issues extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          issues: issues['issues']
        };
    }
    render() {
      
        var issues = [];
        for(var i = 0; i < this.state.issues.length; i = i + 1){
          issues.push(
            <li key={i}>{this.state.issues[i]}</li>
            );
        }
        return (
          <div>
            <h1>Issues</h1>
            <ul>
              {issues}
            </ul>
          </div>
        );
    }
}

export default Issues;