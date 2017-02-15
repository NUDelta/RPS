import React from 'react';
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
          da: da_array['da_array'][0]
        };
        console.log(da_array);
    }
    updateTitleText(title){
      this.setState({
        'da_title':title
      });
    }
    updateDesignArgumentNumber(num){
      this.setState({
        'da': da_array['da_array'][num - 1]
      });
    }
    render() {
        var sections = [];
        for(var i = 1; i < this.state.da.sections.length; i = i + 1){
          sections.push(
              <Section key={i} sectionData={this.state.da.sections[i]}  />
            );
        }
        return (
          <div>
            <Section key={3} sectionData={this.state.da.sections[0]} />
            <Nav updateDA={this.updateDesignArgumentNumber.bind(this)} 
                  numberOfDAs={da_array['da_array'].length}
                  isUpdated={[0,0,0,1,1]} />
            <h3>{this.state.da.da_title}</h3>
            {sections}
          </div>
        );
    }
}

export default Feedback;