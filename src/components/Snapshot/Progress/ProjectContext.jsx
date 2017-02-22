import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Grid} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';

import styles from './styles/ProjectContext.css';
import classNames from 'classnames/bind';

import Section from './Section';

let cx = classNames.bind(styles);

class ProjectContext extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
    	let sections = [];

    	for (var section of this.props.contextSections) {
            sections.push(<Section sectionData={section} />);
        }

        return (
			<Card className={cx('projectContext')}>
				<Grid fluid={true}>
					{sections}
				</Grid>
			</Card>
        );
    }
}

export default ProjectContext;