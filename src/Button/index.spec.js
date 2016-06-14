import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mount, shallow } from 'enzyme';
​
import Button from './';
​
chai.use(chaiEnzyme());
chai.use(sinonChai);
​
describe('<Button />', () => {
  it('should render nothing', () => {
    const sut = shallow(<Button />)
    expect(sut).to.be.empty
  });
});
