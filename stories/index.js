import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Button from '../src'

storiesOf('Button', module)
  .add('Styles', () => (
    <div>
      <Button>Button</Button>
      <Button kind="primary">Primary Button</Button>
      <Button kind="approve">Approve Button</Button>
      <Button kind="danger">Danger Button</Button>
      <Button kind="neutral">Neutral Button</Button>

      <h4>Hollow Buttons</h4>
      <Button kind="hollow-primary">Hollow Primary Button</Button>
      <Button kind="hollow-approve">Hollow Approve Button</Button>
      <Button kind="hollow-danger">Hollow Danger Button</Button>
      <Button kind="hollow-neutral">Hollow Neutral Button</Button>

      <h4>Unstyled Button</h4>
      <Button kind="no-style">No Style Button</Button>
    </div>
  ))
  .add('Sizes', () => (
    <div>
      <Button kind="neutral" size="large">Large Button</Button>
      <Button kind="neutral" size="regular">Regular Button</Button>
      <Button kind="neutral" size="small">Small Button</Button>

      <h4>Hollow Buttons</h4>
      <Button kind="hollow-neutral" size="large">Large Hollow Neutral Button</Button>
      <Button kind="hollow-neutral" size="regular">Regular Hollow Neutral Button</Button>
      <Button kind="hollow-neutral" size="small">Small Hollow Neutral Button</Button>

      <h4>Unstyled Button</h4>
      <Button kind="no-style" size="large">Large No Style Button</Button>
      <Button kind="no-style" size="regular">Regular No Style Button</Button>
      <Button kind="no-style" size="small">Small No Style Button</Button>
    </div>
  ))
  .add('Disabled', () => (
    <div>
      <Button disabled>Button</Button>
      <Button kind="primary" disabled>Primary Button</Button>
      <Button kind="approve" disabled>Approve Button</Button>
      <Button kind="danger" disabled>Danger Button</Button>
      <Button kind="neutral" disabled>Neutral Button</Button>

      <h4>Hollow Buttons</h4>
      <Button kind="hollow-primary" disabled>Hollow Primary Button</Button>
      <Button kind="hollow-approve" disabled>Hollow Approve Button</Button>
      <Button kind="hollow-danger" disabled>Hollow Danger Button</Button>
      <Button kind="hollow-neutral" disabled>Hollow Neutral Button</Button>

      <h4>Unstyled Button</h4>
      <Button kind="no-style" disabled>No Style Button</Button>
    </div>
  ))
  .add('Block', () => (
    <Button kind="neutral" block>Block Button</Button>
  ))
  .add('Href', () => (
    <Button kind="neutral" href="https://google.com">Href Button</Button>
  ))
  .add('Classname', () => (
    <Button kind="neutral" className="fancy-class">Custom Button</Button>
  ))
  .add('Loading', () => (
    <div>
      <Button loading>Button</Button>
      <Button kind="primary" loading>Primary Button</Button>
      <Button kind="approve" loading>Approve Button</Button>
      <Button kind="danger" loading>Danger Button</Button>
      <Button kind="neutral" loading>Neutral Button</Button>

      <h4>Hollow Buttons</h4>
      <Button kind="hollow-primary" loading>Hollow Primary Button</Button>
      <Button kind="hollow-approve" loading>Hollow Approve Button</Button>
      <Button kind="hollow-danger" loading>Hollow Danger Button</Button>
      <Button kind="hollow-neutral" loading>Hollow Neutral Button</Button>

      <h4>Unstyled Button</h4>
      <Button kind="no-style" loading>No Style Button</Button>
    </div>
  ))
  .add('OnClick', () => (
    <Button kind="neutral" onClick={action('clicky')}>Clicky Button</Button>
  ))
