import React from 'react';
import Error from './Error';
import {expect} from 'chai';

describe('<Error/>', () => {
    
    it('Should render by default values with no error', () => {
        let wrapper = shallow(<Error error={false}/>);
        expect(wrapper.find('.error').exists()).to.be.false;
    });
    
    it('Should render error', () => {
        let wrapper = shallow(<Error error/>);
        expect(wrapper.find('.error').exists()).to.be.true;
        
    });
    it('Should render error with error message', () => {
        let wrapper = shallow(<Error
            error
            errorMessage='Error'
        />);
        expect(wrapper.find('.error').exists()).to.be.true;
        expect(wrapper.find('.error-message').text()).to.equal('Error');
    });
    
});