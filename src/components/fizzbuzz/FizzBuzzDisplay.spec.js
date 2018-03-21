import React from 'react';
import FizzBuzzDisplay from './FizzBuzzDisplay';
import {expect} from 'chai';
import sinon from 'sinon';

describe('<FizzBuzzDisplay/>', () => {
    
    it('Should render by default values', () => {
        let wrapper = mount(<FizzBuzzDisplay/>);
        let output = wrapper.find('.fizz-buzz-output');
        expect(output.exists()).to.be.true;
        expect(output.text()).to.equal('');
        expect(wrapper.find('.error').exists()).to.be.false;
    });
    
    it('Should render fizz ', () => {
        let wrapper = mount(<FizzBuzzDisplay
            message='Fizz'
        />);
        let output = wrapper.find('.fizz-buzz-output');
        expect(output.exists()).to.be.true;
        expect(output.text()).to.equal('Fizz');
    });
    it('Should render error with a message of error', () => {
        let wrapper = mount(<FizzBuzzDisplay
            error
            errorMessage='Error'
        />);
        let output = wrapper.find('.fizz-buzz-output');
        expect(output.exists()).to.be.false;
        expect(wrapper.find('.error').exists()).to.be.true;
        expect(wrapper.find('.error-message').text()).to.equal('Error');
    });
    
    it('Should be able to  submit the current value', () => {
        let callback = sinon.spy();
        let wrapper = mount(<FizzBuzzDisplay
            currentValue='3'
            handleSubmit={callback}
        />);
        expect(callback.called).to.be.false;
        wrapper.find('.fizz-buzz-action-btn').find('button').simulate('click');
        
        let output = wrapper.find('.fizz-buzz-output');
        
        expect(callback.called).to.be.true;
        expect(callback.calledWithMatch('3')).to.be.true;
        expect(output.exists()).to.be.true;
        expect(wrapper.find('.error').exists()).to.be.false;
    });
    
});