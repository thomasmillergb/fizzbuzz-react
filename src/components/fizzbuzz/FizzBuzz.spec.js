import React from 'react';
import FizzBuzz from './FizzBuzz';
import nock from 'nock';
import {ENDPOINT, suffixAddress, HOST} from '../../lib/EndpointHelper';
import {expect} from 'chai';

describe('<FizzBuzz/>', () => {
    const INPUT = '{input}';
    
    function sleepFor1ms(){
        return new Promise(r => setTimeout(r, 1));
    }
    it('Should render by default', () => {
        shallow(<FizzBuzz/>);
    });
    
    it('Should render message fizz when ', () => {
        
        console.log(suffixAddress(ENDPOINT.STANDARD_FIZZ_BUZZ.replace(INPUT, '3')));
        nock(HOST)
            .get(suffixAddress(ENDPOINT.STANDARD_FIZZ_BUZZ.replace(INPUT, '3')))
            .reply(200, {'message': 'Fizz'});
        let wrapper = mount(<FizzBuzz/>);
        wrapper.find('.fizz-buzz-numeric-input').find('input').text('3');
        wrapper.find('.fizz-buzz-action-btn').find('button').simulate('click');
        sleepFor1ms().then(() => {
            let output = wrapper.find('.fizz-buzz-output');
            expect(output.exists()).to.be.true;
        })
        
        
    });
    
});