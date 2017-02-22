import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Grid, Row, Col} from 'react-flexbox-grid';

import styles from './styles/Snapshot.css';
import classNames from 'classnames/bind';

import ProjectContext from './Progress/ProjectContext';
import Progress from './Progress/DesignArguments';
import NextSteps from './NextSteps/NextSteps';
import Issues from './Issues/Issues';

import da_array from '../../data/da_array_josh_2_22.json';
import context_array from '../../data/context_array_josh_2_22.json';


let cx = classNames.bind(styles);

class Snapshot extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          arguments: da_array['da_array'],
          context: context_array['context_array']
        };
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
                           <ProjectContext contextSections={this.state.context} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1}>
                            <h3>Design Arguments</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1}>
                           <Progress arguments={this.state.arguments}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1}>
                            <h3>Issues</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1}>
                           <Issues />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1}>
                            <h3>Suggested Next Steps</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1}>
                           <NextSteps />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Snapshot;