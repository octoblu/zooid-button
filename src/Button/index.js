import blacklist from 'blacklist'
import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

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
  'no-style'
]

const propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.element,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(BUTTON_KINDS),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(BUTTON_SIZES)
}

const defaultProps = {
  disabled: false,
  kind: BUTTON_KINDS[0],
  size: BUTTON_SIZES[0],
}

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      block,
      className,
      component,
      disabled,
      href,
      size
    } = this.props

    let { kind } = this.props

    if (BUTTON_KINDS.indexOf(kind) === -1) kind = BUTTON_KINDS[0]

    const classes = classNames(
      styles[kind],
      styles[size],
      {[`${styles.disabled}`]: disabled },
      {[`${styles.block}`]: block },
      className
    )

    let props = blacklist(this.props, 'block', 'className', 'component', 'disabled', 'kind', 'size')
    props.className = classes

    let tag = 'button'
    if (href) tag = 'a'

    if (component) return React.cloneElement(component, props)

    return React.createElement(tag, props, props.children)
  }
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
