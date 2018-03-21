import React, {Component} from 'react';

//Used an input component for simplicity and reliability as its already been unit tested https://www.npmjs.com/package/react-numeric-input
import NumericInput from 'react-numeric-input';
import PropTypes from 'prop-types';
import Error from '../error/Error';
import './fizzbuzz.css';
import {Button, Alert} from 'reactstrap';

/**
 * I have chosen to keep this very simple for this assignment as there is only one endpoint and only dependends
 * on the server running.
 * The component contains all the props for fizzbuzz, ie error handling and printing messages
 *
 * There are a  hundreds of ways that react can be implemented, by that i mean react is just a small drop in the
 * ocean of what people normally think of react.
 * Must commonly react is used with redux which is a props container that any container can retrieve props from. See for detail https://redux.js.org/
 * A good example of what i am talking about is react slingshot, a starter kit i was tempted to use but was too overkill. See for detail https://github.com/coryhouse/react-slingshot
 *
 */

class FizzBuzzDisplay extends Component {
    
    constructor() {
        super();
        this.renderMessage = this.renderMessage.bind(this);
        
    }
    
    renderMessage() {
        if (this.props.error === true) {
            return <Error error={this.props.error} errorMessage={this.props.errorMessage}/>;
        }
        else if (this.props.message !== '') {
            return <Alert color='success'><span className={'fizz-buzz-output'}>{this.props.message}</span></Alert>;
        }
    }
    
    render() {
        return (
            <div className='fizz-buzz-container'>
                <h1 className='fizz-buzz-title'>FizzBuzz!!!</h1>
                <div className='fizz-buzz'>
                    <div className={'fizz-buzz-message'}>
                        {this.renderMessage()}
                    </div>
                    <NumericInput className='fizz-buzz-numeric-input' defaultValue={this.props.currentValue} onChange={this.props.onChange} precision={0}/>
                    <div className='fizz-buzz-action-container'>
                        <Button className='fizz-buzz-action-btn' onClick={() => this.props.handleSubmit(this.props.currentValue)}>Submit</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FizzBuzzDisplay;

FizzBuzzDisplay.protoTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error       : PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    currentValue: PropTypes.string.isRequired,
    message     : PropTypes.string.isRequired,
    onChange    : PropTypes.func.isRequired
};

FizzBuzzDisplay.defaultProtoTypes = {
    handleSubmit: () => {},
    error       :  false,
    errorMessage: '',
    currentValue: '',
    message     : '',
    onChange    : () => {}
};