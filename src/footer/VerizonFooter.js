import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Text, Icon } from 'native-base';

export default class VerizonFooter extends Component {

  constructor(props) {
    super(props);
  }

  handleHomeClick = () => {
    const { navigation } = this.props
    navigation.navigate('Home')
  }
  handleAccountClick = () => {
    const { navigation } = this.props
    navigation.navigate('Account')
  }
  handleMoreClick = () => {
    const { navigation } = this.props
    navigation.navigate('More')
  }
  handleBillingClick = () => {
    const { navigation } = this.props
    navigation.navigate('Billing')
  }


  render() {
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: "#FFF" }}>
          <Button vertical onPress={this.handleHomeClick}>
            <Icon style={styles.icon} type="AntDesign" name="home" />
            <Text style={styles.text}>Home</Text>
          </Button>
          <Button vertical onPress={this.handleBillingClick}>
            <Icon style={styles.icon} type="MaterialCommunityIcons" name="shopping-outline" />
            <Text style={styles.text}>Billing</Text>
          </Button>
          <Button vertical onPress={this.handleAccountClick}>
            <Icon style={styles.icon} type="MaterialCommunityIcons" name="account-circle-outline" />
            <Text style={styles.text}>Account</Text>
          </Button>
          <Button vertical onPress={this.handleMoreClick}>
            <Icon style={styles.icon} type="Entypo" name="menu" />
            <Text style={styles.text}>More</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: 'black'
  },
  text: {
    color: 'black'
  },
});