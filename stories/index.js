import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from '../src';

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
