import React, { Component } from 'react'
import WithTheme from 'styled/theme'
import View from 'components/View'

class App extends Component {
  render() {
    return (
      <WithTheme>
        <View {...this.props} />
      </WithTheme>
    );
  }
}

export default App;
