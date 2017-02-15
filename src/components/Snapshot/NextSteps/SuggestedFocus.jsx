import React from 'react';
import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class SuggestedFocus extends React.Component {
	constructor(props) {
      super(props);
  }
  render() {
      return (
        <div>
          <h4>
            • {this.props.text}
          </h4>
        </div>
      );
  }
}

export default SuggestedFocus;