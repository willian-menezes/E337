import {mount} from 'enzyme';

import React from 'react';

import Events from './Events';

describe('Testing a Icon', () => {
  it('Shold render svg', () => {
    const wrapper = mount(<Events color="#000" />);

    expect(wrapper.length).toBe(1);
  });
});
