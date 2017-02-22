import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardHeader} from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';

import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';
import da_array from '../../../data/da_array_kapil.json';


import Nav from './Nav';
import Section from './Section';

let cx = classNames.bind(styles);

class Feedback extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          arguments: da_array['da_array'],
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
        let sections = [];
        let swipeIterator = 0;

        for (var da of this.state.arguments) {
        
            for (var section of da.sections) {
                sections.push(<Section sectionData={section} />);
            }

            tabs.push(
                <Tab key={swipeIterator} value={swipeIterator} label={"D. Argument #" + da.da_number}></Tab>
            );

            swipeIterator++;
        }


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
                    {sections}
                </SwipeableViews>
            </Card>
        );
    }
}

export default Feedback;