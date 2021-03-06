import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {Grid} from 'react-flexbox-grid';

import styles from './styles/Section.css';
import classNames from 'classnames/bind';

import Question from './Question';

let cx = classNames.bind(styles);

class Section extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.sectionData.section_updated == 1 ? true : false
        };
    }
    handleExpandChange(){
        this.setState({
            expanded: !this.state.expanded
        });
    }
    render() {
        var questions = [];
        for(var i = 0; i < this.props.sectionData.questions.length; i = i + 1){
          questions.push(
              <Question key={i} questionData={this.props.sectionData.questions[i]}  />
            );
        }
        return (
            <Card className={cx('section')} expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
                <CardHeader
                    title={"S" + this.props.sectionData.section_number + ": " + this.props.sectionData.section_title}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    <Grid fluid={true}>
                        {questions}
                    </Grid>
                </CardText>
            </Card>
        );
    }
}

export default Section;