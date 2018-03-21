import React, {Component} from 'react';
//Used an input component for simplicity and reliability as its already been unit tested https://www.npmjs.com/package/react-numeric-input
import axios from 'axios';
import {address, defaultHeaders, ENDPOINT} from '../../lib/EndpointHelper';
import FizzBuzzDisplay from '../../components/fizzbuzz/FizzBuzzDisplay';

/**
 * I have chosen to keep this very simple for this assignment as there is only one endpoint and only dependends
 * on the server running.
 * The component contains all the state for fizzbuzz, ie error handling and printing messages. I have put this in a folder container as this is would normally interact with redux state
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
        this.state = defaultState;
        
    }
    
    handleSubmit(input) {
        this.setState({...defaultState, currentValue: this.state.currentValue});
        axios.get(address(ENDPOINT.STANDARD_FIZZ_BUZZ).replace('{input}', input), defaultHeaders)
            .then(res => {
                this.setState({message: res.data.message});
            })
            .catch(error => {
                this.setState({
                    errorMessage: error.message,
                    error       : true
                });
            });
    }
    
    
    render() {
        return (
           <FizzBuzzDisplay
               handleSubmit = {this.handleSubmit}
               error = {this.state.error}
               errorMessage = {this.state.errorMessage}
               currentValue = {this.state.currentValue}
               message = {this.state.message}
               onChange = {(val) => this.setState({currentValue :  val})}
           />
        );
    }
}


export default FizzBuzz;