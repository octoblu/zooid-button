import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from '../src';

storiesOf('Button', module)
  .add('Basic', () => (
    <Button/>
  ));
