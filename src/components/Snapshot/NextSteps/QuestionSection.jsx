import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {Row, Col} from 'react-flexbox-grid';

import styles from './styles/QuestionSection.css';
import classNames from 'classnames/bind';

import BestPractice from './BestPractice';

let cx = classNames.bind(styles);

class QuestionSection extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
        var bestPractices = [];
        for (var i = 0; i < this.props.questionData.best_practices.length; i++) {
            bestPractices.push(
                <BestPractice key={i} bpData={this.props.questionData.best_practices[i]} />
            );
        }
        return (
            <Row>
                <Col xs={12}>
                    <Card className={cx('question')}>
                        <CardHeader
                            title={"Q" + this.props.questionData.qn_number + ": " + this.props.questionData.qn_title}
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true}> 
                            {bestPractices}
                        </CardText>
                    </Card>
                </Col>
            </Row>        	
        );
    }
}

export default QuestionSection;