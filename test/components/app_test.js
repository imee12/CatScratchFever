import { renderComponent , expect } from '../test_helper';
import { mount, shallow } from 'enzyme';
import React from 'react';
import App from '../../js/components/app';
import Header from '../../js/components/common/Header'

// use describe to group together similar tests
describe('App' , () => {

  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

// use it to test a single attribute of a target
  it('it is there yo', () => {
    expect(component).to.contain('What up G');
  });

  // it('shows a component header', () => {
  //   const wrapper = mount(<App/>);
  //   expect(wrapper.find(Header)).to.have.length(1);
  //
  // });
});
