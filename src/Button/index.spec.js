import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mount, shallow } from 'enzyme';

import Button from './';
import styles from './styles.css'

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('<Button />', () => {

  describe('when kind prop is not set', () => {
    it('should render a default button', () => {
      const sut = shallow(<Button />)

      expect(sut).to.have.className(styles.default);
    })
  })

  describe('when kind prop is set', () => {

    describe('when kind is valid', () => {
      it('should render a Button that includes the kind in the className', () => {
        const sut = shallow(<Button kind="primary"/>)

        expect(sut).to.have.className(styles.primary);
      });
    });

    describe('when kind is invalid', () => {
      it('should render a default Button', () => {
        const sut = shallow(<Button kind="asdf" />)

        expect(sut).to.not.have.className(styles.asdf)
        expect(sut).to.have.className(styles.default)
      })
    })
  })

  describe('when size prop is set', () => {

    describe('when size is invalid', () => {
      it('should render a default sized Button', () => {
        const sut = shallow(<Button size="asdf" />)

        expect(sut).to.not.have.className(styles.asdf)
        expect(sut).to.have.className(styles.default)
      })
    })

    describe('when size is valid', () => {
      it('should render a Button with the set size', () => {
        const sut = shallow(<Button size="large"/>)

        expect(sut).to.have.className(styles.large);
      });
    });
  })

  describe('when disabled prop is set', () => {
    it('should render a disabled Button', () => {
      const sut = shallow(<Button disabled />)

      expect(sut).to.have.className(styles.disabled)
      expect(sut).to.have.className(styles.default)
    })
  })

  describe('when block prop is set', () => {
    it('should render a block Button', () => {
      const sut = shallow(<Button block />)

      expect(sut).to.have.className(styles.block)
      expect(sut).to.have.className(styles.default)
    })
  })

  describe('when href prop is set', () => {
    it('should render a Button with the href', () => {
      const sut = shallow(<Button href='/home' />)

      expect(sut.prop('href')).to.equal('/home')
    })
  })

  describe('when className prop is set', () => {
    it('should render a Button with the className', () => {
      const sut = shallow(<Button className='fancy-css' />)

      expect(sut.prop('className')).to.contain('fancy-css')
    })
  })

  describe('when onClick prop is set', () => {
    it('should render a Button with the onClick function', () => {
      const handleClick = sinon.spy()
      const sut = shallow(<Button onClick={handleClick} />)

      sut.simulate('click')

      expect(handleClick).to.have.been.called
    })
  })
});
