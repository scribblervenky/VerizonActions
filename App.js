import 'react-native-gesture-handler'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'

import { Container, Text } from 'native-base';
import Routes from './src/util/routes'
import VerizonFooter from './src/footer/VerizonFooter'

class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
        <Container>
          <Routes/>
        </Container>
    );
  }
}

export default App
