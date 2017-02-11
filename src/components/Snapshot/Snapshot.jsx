import React from 'react';
import styles from './styles/Snapshot.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Snapshot extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
        		<h1>SNAPSHOT</h1>
            </div>
        );
    }
}

export default Snapshot;