import React from 'react';
import TextField from 'material-ui/TextField';
import {Row, Col} from 'react-flexbox-grid';

import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

class Input extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addSuggestedFocus(this.state.text);
        this.setState({
            text: ''
        });
    }

    changeHandler(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        onChange={this.changeHandler.bind(this)}
                        id="nextSteps" 
                        value={this.state.text}
                        autoComplete="off"
                        fullWidth={true}
                        floatingLabelText="Add A New Focus"
                    />
                    </form>
                </Col>
            </Row>
        );
    }
}

export default Input;