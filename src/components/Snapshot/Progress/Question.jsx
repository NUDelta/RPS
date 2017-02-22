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
      //var title_html = <div><span className={cx('chip')}>{"Q" + this.props.questionData.question_number + ": " + this.props.questionData.question_text}</span><Chip className={cx('chip')}><Avatar size={32}>{this.props.questionData.question_confidence}</Avatar>Student Confidence</Chip></div>;
      var title_html = <div>{"Q" + this.props.questionData.question_number + ": " + this.props.questionData.question_text}</div>;
        return (
            <Row>
                <Col xs={12}>
                    <Card className={cx('question')} expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
                        <CardHeader
                            title={title_html}
                            subtitle={"Student Confidence Number: " + this.props.questionData.question_confidence}
                            actAsExpander={true}
                            showExpandableButton={true}
                            titleColor={this.props.questionData.question_updated ? 'white' : 'black'}
                            //subtitleColor={this.props.questionData.question_updated ? 'white' : 'black'}
                            style={
                                {backgroundColor:this.props.questionData.question_updated ? 'rgba(46, 204, 113,0.8)' : 'white'}
                            }
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