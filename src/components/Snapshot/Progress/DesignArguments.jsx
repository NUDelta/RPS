import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardHeader} from 'material-ui/Card';
import {Grid} from 'react-flexbox-grid'
import SwipeableViews from 'react-swipeable-views';

import styles from './styles/DesignArguments.css';
import classNames from 'classnames/bind';


import Nav from './Nav';
import Section from './Section';

let cx = classNames.bind(styles);

class Feedback extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          slideIndex: 0
        };
    }
    handleChange(value) {
        this.setState({
            slideIndex: value
        });
    }

    render() {
        let tabs = [];
        let sectionsList = [];
        let swipeIterator = 0;

        for (var da of this.props.arguments) {
            let sections = [];
            for (var section of da.sections) {
                sections.push(<Section sectionData={section} />);
            }

            sectionsList.push(<Grid className='grid' fluid={true}>{sections}</Grid>);

            tabs.push(
                <Tab key={swipeIterator} value={swipeIterator} label={"D. Argument #" + da.da_number}></Tab>
            );

            swipeIterator++;
        }

        console.log(sectionsList)

        return (
            <Card>
                
                <Tabs
                    onChange={this.handleChange.bind(this)}
                    value={this.state.slideIndex}
                >
                    {tabs}
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange.bind(this)}
                >
                    {sectionsList}
                </SwipeableViews>
            </Card>
        );
    }
}

export default Feedback;