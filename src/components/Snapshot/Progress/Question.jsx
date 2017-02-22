import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import ReactMarkdown from 'react-markdown';
import {Grid, Row, Col} from 'react-flexbox-grid';

import styles from './styles/Question.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Question extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.questionData.question_updated == 1 ? true : false
        };
    }
    handleExpandChange(){
        this.setState({
            expanded: !this.state.expanded
        });
    }
    render() {
      var question_color = null;
      if(this.props.questionData.question_updated){
        question_color = {color:'green'}
      } else {
        question_color = {color:'black'}
      }
        return (
            <Row>
                <Col xs={12}>
                    <Card className={cx('question')} expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
                        <CardHeader
                            title={"Q" + this.props.questionData.question_number + ": " + this.props.questionData.question_text}
                            subtitle={<Chip><Avatar size={32}>{this.props.questionData.question_confidence}</Avatar>Student Confidence</Chip>}
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true}> 
                            <ReactMarkdown source={this.props.questionData.question_answers}/>
                        </CardText>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Question;