import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SingleGuestSelector from '../../app/components/SingleGuestSelector';


describe('test <SingleGuestSelector />', () => {
  it('can render element with title and reminder', () => {
    const wrapper = shallow(<SingleGuestSelector title="foo" reminder="bar" />);
    expect(wrapper.find('.single-guest-selector-wrapper')).to.have.length(1);
    expect(wrapper.find('.single-guest-selector-title span').text()).to.equal("foo");
    expect(wrapper.find('.single-guest-selector-reminder span').text()).to.equal("bar");
  });

});
