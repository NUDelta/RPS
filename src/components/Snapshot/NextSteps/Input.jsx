import React from 'react';
import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

class Input extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            text: '',
            key: 0
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.text);
        this.props.addSuggestedFocus(this.state.text);
        this.setState({
            text: '',
            key: this.state.key + 1
        });
    }

    changeHandler(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
        	<div className="form-group">
              <label htmlFor="nextSteps">Add More:</label>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input 
                    onChange={this.changeHandler.bind(this)}
                    type="text" 
                    className="form-control" 
                    id="nextSteps" 
                    value={this.state.text}
                    autoComplete="off"
                    key={this.state.key}
                />
              </form>
            </div>
        );
    }
}

export default Input;