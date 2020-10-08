import 'react-native-gesture-handler'
import React from 'react'
import { Container, Text, Button } from 'native-base';
import Routes from './src/util/routes'


class App extends React.Component {

  render() {
    return (
      <Container>
        <Routes />
      </Container>
    );
  }
}

export default App
