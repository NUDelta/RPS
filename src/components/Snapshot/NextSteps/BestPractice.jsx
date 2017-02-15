import React from 'react';
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
            <p>{"BP #" + this.props.bpData.bp_number + ": " + this.props.bpData.bp_text}</p>
          </li>
        );
    }
}

export default BestPractice;