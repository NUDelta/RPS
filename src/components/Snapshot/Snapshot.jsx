import React from 'react';
import styles from './styles/Snapshot.css';
import classNames from 'classnames/bind';

import Feedback from './Feedback/Feedback';
import NextSteps from './NextSteps/NextSteps';

let cx = classNames.bind(styles);

class Snapshot extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
        		<Feedback/>
                <NextSteps/>
            </div>
        );
    }
}

export default Snapshot;