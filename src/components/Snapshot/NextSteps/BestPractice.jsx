import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class BestPractice extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
          <li>
            <ReactMarkdown source={"BP #" + this.props.bpData.bp_number + ": " + this.props.bpData.bp_text}/>
          </li>
        );
    }
}

export default BestPractice;