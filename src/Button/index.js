import { PropTypes } from 'react'
import styled from 'styled-components'


const Button = styled.button`
  display: inline-block;
  border: none;
  border-radius: 2px;
  padding: 0.6em 1em;
  font-size: 16px;
  font-family: "citrixsans-regular", Arial, Helvetica, sans-serif;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  appearance: none;
  transition-delay: 0;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  transition-property: background, border-color;

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    text-decoration: none;
  }
`


const BUTTON_SIZES = ['regular', 'large', 'small']
const BUTTON_KINDS = [
  'approve',
  'danger',
  'default',
  'hollow-approve',
  'hollow-danger',
  'hollow-neutral',
  'hollow-primary',
  'neutral',
  'no-style',
  'primary',
]

Button.propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.element,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(BUTTON_KINDS),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(BUTTON_SIZES),
}

Button.defaultProps = {
  disabled: false,
  kind: BUTTON_KINDS[0],
  loading: false,
  size: BUTTON_SIZES[0],
}

Button.displayName = 'Button'

export default Button

// import blacklist from 'blacklist'
// import classNames from 'classnames'
// import React, { Component, PropTypes } from 'react'
// import LoadingIndicator from '../LoadingIndicator'
//
// import styles from './styles.css'
//
//
// const propTypes = {
//   block: PropTypes.bool,
//   className: PropTypes.string,
//   component: PropTypes.element,
//   disabled: PropTypes.bool,
//   href: PropTypes.string,
//   kind: PropTypes.oneOf(BUTTON_KINDS),
//   loading: PropTypes.bool,
//   onClick: PropTypes.func,
//   size: PropTypes.oneOf(BUTTON_SIZES),
// }
//
// const defaultProps = {
//   disabled: false,
//   kind: BUTTON_KINDS[0],
//   loading: false,
//   size: BUTTON_SIZES[0],
// }
//
// class Button extends Component {
//
//   render() {
//     const {
//       block,
//       className,
//       component,
//       href,
//       loading,
//       size,
//     } = this.props
//
//     let { kind } = this.props
//
//     if (BUTTON_KINDS.indexOf(kind) === -1) kind = BUTTON_KINDS[0]
//
//     const classes = classNames(
//       styles[kind],
//       styles[size],
//       { [`${styles.block}`]: block },
//       className
//     )
//
//     const sanitizedProps = blacklist(this.props,
//       'block',
//       'className',
//       'component',
//       'kind',
//       'loading',
//       'size'
//     )
//
//     sanitizedProps.className = classes
//
//     let tag = 'button'
//     if (href) tag = 'a'
//
//     if (component) return React.cloneElement(component, sanitizedProps)
//
//     if (loading) {
//       sanitizedProps.children = <LoadingIndicator />
//       sanitizedProps.disabled = true
//     }
//
//     return React.createElement(tag, sanitizedProps, sanitizedProps.children)
//   }
// }
//
// Button.propTypes = propTypes
// Button.defaultProps = defaultProps
//
// export default Button
