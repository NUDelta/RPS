import React from 'react';
import styles from './styles/Snapshot.css';
import classNames from 'classnames/bind';

import Feedback from './Feedback/Feedback';
import NextSteps from './NextSteps/NextSteps';
import Issues from './Issues/Issues';

let cx = classNames.bind(styles);

class Snapshot extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="container-fluid">
                <h1>Snapshot</h1>
        		<Feedback/>
                <hr />
                <Issues/>
                <hr/>
                <NextSteps/>
            </div>
        );
    }
}

export default Snapshot;