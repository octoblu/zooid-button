import blacklist from 'blacklist'
import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'
import LoadingIndicator from '../LoadingIndicator'

import styles from './styles.css'

const BUTTON_SIZES = ['regular', 'large', 'small']
const BUTTON_KINDS = [
  'default',
  'primary',
  'approve',
  'danger',
  'neutral',
  'hollow-primary',
  'hollow-approve',
  'hollow-danger',
  'hollow-neutral',
  'no-style',
]

const propTypes = {
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

const defaultProps = {
  disabled: false,
  kind: BUTTON_KINDS[0],
  loading: false,
  size: BUTTON_SIZES[0],
}

class Button extends Component {

  render() {
    const {
      block,
      className,
      component,
      href,
      loading,
      size,
    } = this.props

    let { kind } = this.props

    if (BUTTON_KINDS.indexOf(kind) === -1) kind = BUTTON_KINDS[0]

    const classes = classNames(
      styles[kind],
      styles[size],
      { [`${styles.block}`]: block },
      className
    )

    const sanitizedProps = blacklist(this.props,
      'block',
      'className',
      'component',
      'kind',
      'loading',
      'size'
    )

    sanitizedProps.className = classes

    let tag = 'button'
    if (href) tag = 'a'

    if (component) return React.cloneElement(component, sanitizedProps)

    if (loading) {
      sanitizedProps.children = <LoadingIndicator />
      sanitizedProps.disabled = true
    }

    return React.createElement(tag, sanitizedProps, sanitizedProps.children)
  }
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
