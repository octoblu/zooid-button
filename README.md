# zooid-button
React Button Component

## Install
```
npm install --save zooid-button
```
## Props
| Prop      | Type   | Default | Description                          |
| ----------| -------| --------| -------------------------------------|
| kind      | string |'default'| Choose from default, primary, approve, danger, neutral, hollow-primary, hollow-approve, hollow-danger, hollow-neutral, or no-style|
| size      | string |'regular'| Choose from small, regular, or large|
| disabled  | boolean|         | Makes your button un-clickable|
| block     | boolean|         | Makes your button have 100% width|
| href      | string |         | Link to something by adding an href to your button|
| className | string |         | Additional css classes for your button|
| onClick   |function|         | Add a custom function to decide what to do with button clicks|


## Example
```
import React, { Component } from 'react'
import Button from 'zooid-button'

export default class App extends Component {
  render() {
    return <div>
      <h1>App</h1>
      <Button
        block
        kind="neutral"
        size="large"
        onClick={this.somefunction}>
        Large Block Button
      </Button>
    </div>
  }
}
```
