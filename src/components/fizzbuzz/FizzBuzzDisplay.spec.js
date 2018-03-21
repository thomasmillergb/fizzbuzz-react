import React from 'react';
import FizzBuzzDisplay from './FizzBuzzDisplay';
import {expect} from 'chai';

describe('<FizzBuzzDisplay/>', () => {
    
    it('Should render by default', () => {
        let wrapper = mount(<FizzBuzzDisplay/>);
        let output = wrapper.find('.fizz-buzz-output');
        expect(output.exists()).to.be.true;
        expect(output.text()).to.equal('');
        expect(wrapper.find('.error').exists()).to.be.false;
    });
    
    it('Should render message fizz when ', () => {
        let wrapper = mount(<FizzBuzzDisplay
            message = 'Fizz'
        />);
        let output = wrapper.find('.fizz-buzz-output');
        expect(output.exists()).to.be.true;
        expect(output.text()).to.equal('Fizz');
    });
    it('Should render message fizz when ', () => {
        let wrapper = mount(<FizzBuzzDisplay
            error
            errorMessage = 'Error'
        />);
        let output = wrapper.find('.fizz-buzz-output');
        expect(output.exists()).to.be.false;
        expect(wrapper.find('.error').exists()).to.be.true;
        expect(wrapper.find('.error-message').text()).to.equal('Error');
    });
    
    
    it('Should render message fizz when ', () => {
        let wrapper = mount(<FizzBuzzDisplay
            error
            errorMessage = 'Error'
        />);
        let output = wrapper.find('.fizz-buzz-output');
        expect(output.exists()).to.be.false;
        expect(wrapper.find('.error').exists()).to.be.true;
        expect(wrapper.find('.error-message').text()).to.equal('Error');
    });
    
    it('Should render message fizz when ', () => {
        let wrapper = mount(<FizzBuzzDisplay
            currentValue = '3'
            onClick = 'Error'
        />);
        let output = wrapper.find('.fizz-buzz-output');
        expect(output.exists()).to.be.false;
        expect(wrapper.find('.error').exists()).to.be.true;
        expect(wrapper.find('.error-message').text()).to.equal('Error');
    });
    
});