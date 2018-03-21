import React, {Component} from 'react';

//Used an input component for simplicity and reliability as its already been unit tested https://www.npmjs.com/package/react-numeric-input
import NumericInput from 'react-numeric-input';
import Error from '../error/Error';
import axios from 'axios';
import {address, ENDPOINT, defaultHeaders, suffixAddress} from '../../lib/EndpointHelper';
import './fizzbuzz.css';
import {Button, Alert} from 'reactstrap';

/**
 * I have chosen to keep this very simple for this assignment as there is only one endpoint and only dependends
 * on the server running.
 * The component contains all the state for fizzbuzz, ie error handling and printing messages
 *
 * There are a  hundreds of ways that react can be implemented, by that i mean react is just a small drop in the
 * ocean of what people normally think of react.
 * Must commonly react is used with redux which is a state container that any container can retrieve state from. See for detail https://redux.js.org/
 * A good example of what i am talking about is react slingshot, a starter kit i was tempted to use but was too overkill. See for detail https://github.com/coryhouse/react-slingshot
 *
 */



const defaultState = {
    error       : false,
    errorMessage: '',
    currentValue: 1,
    message     : ''
};

class FizzBuzz extends Component {
    
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
        this.state = defaultState;
        
    }
    
    handleSubmit(input) {
        this.setState(defaultState);
        console.log(address(ENDPOINT.STANDARD_FIZZ_BUZZ.replace('{input}', '3')));
        axios.get(address(ENDPOINT.STANDARD_FIZZ_BUZZ).replace('{input}', input), defaultHeaders)
            .then(res => {
                this.setState({message: res.data.message});
            })
            .catch(error => {
                // this.setState({
                //     errorMessage: error.message,
                //     error       : true
                // });
            });
    }
    
    renderMessage() {
        if (this.state.error === true) {
            return <Error error={this.state.error} errorMessage={this.state.errorMessage}/>;
        }
        else if(this.state.message !== ''){
            return <Alert color='success'><span className={'fizz-buzz-output'}>{this.state.message}</span></Alert>;
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
                    <NumericInput className='fizz-buzz-numeric-input' defaultValue={this.state.currentValue} onChange={(value) => this.setState({currentValue: value})} precision={0}/>
                    <div className='fizz-buzz-action-container'>
                        <Button className='fizz-buzz-action-btn' onClick={() => this.handleSubmit(this.state.currentValue)}>Submit</Button>
                    </div>
                </div>
            </div>
        );
    }
}


export default FizzBuzz;