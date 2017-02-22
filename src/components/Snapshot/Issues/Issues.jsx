import React from 'react';
import {Card} from 'material-ui/Card';

import styles from './styles/Issues.css';
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
          <Card className={cx('issues')}>
            <ul>
              {issues}
            </ul>
          </Card>
        );
    }
}

export default Issues;