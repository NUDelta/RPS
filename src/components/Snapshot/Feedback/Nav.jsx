import React from 'react';
import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Nav extends React.Component {
	constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(e){
      var number = e.target.dataset.number;
      console.log(number);
      console.log(this);
      this.props.updateDA(number);
    }

    render() {
        var navButtons = [];
        for(var i = 0; i < this.props.numberOfDAs; i = i + 1) {
          navButtons.push(
              <button 
                key={i}
                type="button" 
                className="btn btn-default" 
                data-number={i+1}
                onClick={this.handleButtonClick}>Design Argument {i + 1}</button>
            );
        }
        return (
          <div>
            <div className="btn-group btn-group-lg" role="group" aria-label="...">
              {navButtons}
            </div>	
          </div>
        );
    }
}

export default Nav;