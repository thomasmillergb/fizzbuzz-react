import React, {Component} from 'react';

//Used an input component for simplicity and reliability as its already been unit tested https://www.npmjs.com/package/react-numeric-input
import NumericInput from 'react-numeric-input';
import PropTypes from 'prop-types';
import Error from '../error/Error';
import './fizzbuzz.css';
import {Button, Alert} from 'reactstrap';


/*
* The follow component is what does the rendering
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
                    <NumericInput className='fizz-buzz-numeric-input' defaultValue={this.props.currentValue} onChange={this.props.onChange} precision={0} value={this.props.currentValue}/>
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
    handleSubmit: PropTypes.func,
    error       : PropTypes.bool,
    errorMessage: PropTypes.string,
    currentValue: PropTypes.string,
    message     : PropTypes.string,
    onChange    : PropTypes.func
};

FizzBuzzDisplay.defaultProtoTypes = {
    handleSubmit: () => {},
    error       :  false,
    errorMessage: '',
    currentValue: '',
    message     : '',
    onChange    : () => {}
};