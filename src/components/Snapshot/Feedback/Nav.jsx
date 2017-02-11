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
        return (
            <div className="btn-group" role="group" aria-label="...">
              <button 
                type="button" 
                className="btn btn-default" 
                data-number="1"
                onClick={this.handleButtonClick}>1</button>
              <button 
                type="button" 
                className="btn btn-default" 
                data-number="2"
                onClick={this.handleButtonClick}>2</button>
              <button 
                type="button" 
                className="btn btn-default" 
                data-number="3"
                onClick={this.handleButtonClick}>3</button>
            </div>	
        );
    }
}

export default Nav;