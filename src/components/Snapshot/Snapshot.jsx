import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Grid, Row, Col} from 'react-flexbox-grid';

import styles from './styles/Snapshot.css';
import classNames from 'classnames/bind';

import ProjectContext from './ProjectContext/ProjectContext';
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
            <div>
                <AppBar
                    title="Snapshot"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Grid fluid={true}>
                    <Row>
                        <Col xs={10} xsOffset={1}>
                            <h3>Project Context</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1}>
                	       <ProjectContext />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Snapshot;