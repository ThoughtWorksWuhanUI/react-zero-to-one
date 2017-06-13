import React from 'react';
import { expect } from 'chai';
import { shallow,mount } from 'enzyme';
import  sinon  from 'sinon';

import SingleGuestSelector from '../../app/components/SingleGuestSelector';


describe('test <SingleGuestSelector />', () => {
  let wrapper, onChangeCallback;
  const initNumber=1;
  const getGuestNumber=(componentWrapper)=>{
    return componentWrapper.find('.guest-number').text()
  };

  const generateComponentWithNumber=(number)=>{
    return mount(<SingleGuestSelector title="foo" reminder="bar"  number={number} onChange={onChangeCallback}/>);
  };
  
  before(() => {
    onChangeCallback = sinon.spy();
    wrapper = generateComponentWithNumber(initNumber);
  });
  
  it('can render element with title and reminder', () => {
    expect(wrapper.find('.single-guest-selector-wrapper')).to.have.length(1);
    expect(wrapper.find('.single-guest-selector-title span').text()).to.equal("foo");
    expect(wrapper.find('.single-guest-selector-reminder span').text()).to.equal("bar");
  });

  it('click plus button will trigger onChange callback', () => {
    wrapper.find('.plus-button-icon').simulate('click');
    
    expect(onChangeCallback).to.have.property('callCount', 1);
  });

  it('click sub button will trigger onChange callback again', () => {
    var currentCallCount=onChangeCallback.callCount;
    wrapper.find('.sub-button-icon').simulate('click');
    
    expect(onChangeCallback).to.have.property('callCount', currentCallCount+1);
  });

  it('click plus button will plus one to the number when current number less than 16', () => {
    wrapper.find('.plus-button-icon').simulate('click');
    
    expect(getGuestNumber(wrapper)).to.equal('2');
  });

  it('click plus button will not plus one to the number when current number more than 16', () => {
    let newWrapper = generateComponentWithNumber(16);
    newWrapper.find('.plus-button-icon').simulate('click');

    expect(getGuestNumber(newWrapper)).to.equal('16');
  });

  it('click sub button will sub one to the number when current number more than 0', () => {
    let newWrapper =generateComponentWithNumber(1);
    newWrapper.find('.sub-button-icon').simulate('click');

    expect(getGuestNumber(newWrapper)).to.equal('0');
  });

  it('click sub button will not sub one to the number when current number no more than 0', () => {
    let newWrapper = generateComponentWithNumber(0);
    newWrapper.find('.sub-button-icon').simulate('click');

    expect(getGuestNumber(newWrapper)).to.equal('0');
  });
});
