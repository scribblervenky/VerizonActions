import React from 'react'

import { View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Container, Text, List, ListItem, Left, Right, Icon, Button } from 'native-base';
import VerizonFooter from '../footer/VerizonFooter'

class Current extends React.Component {

  handleMakePaymentClick = () => {
    const { navigation } = this.props
    navigation.navigate('MakePayment')
  }

  render() {
    return (
      <Container>
        <ScrollView style={styles.container}>
          <View style={{ paddingLeft: 20, paddingTop: 30 }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', paddingBottom: 10 }}>
              Thanks, Your bill
            </Text>
            <Text style={{ fontSize: 35, fontWeight: 'bold', paddingBottom: 10 }}>
              is $364.19
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', paddingBottom: 10 }}>
              Sep 15 - Oct 15
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', paddingBottom: 10 }}>
              Account # 0321463911-0001
            </Text>
          </View>
          <View style={{alignSelf: 'center', paddingTop:10}}>
            <Button rounded style={{backgroundColor: 'black'}} onPress={this.handleMakePaymentClick}>
              <Text style={{ fontSize: 15, fontWeight: 'bold'}}>Pay Now</Text>
            </Button>
          </View>
          <View style={{ paddingLeft: 10, paddingRight: 20, paddingTop: 10 }}>
            <List>
              <ListItem>
                <View style={{ backgroundColor: 'black', height: 5, width: Dimensions.get('window').width * 0.85 }} />
              </ListItem>
              <ListItem style={{ paddingTop: 20, paddingBottom: 20 }}>
                <Left>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-start' }}>Balance Adjustments</Text>
                </Left>
                <Right>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-start' }}>$364.19</Text>
                    <Icon name="arrow-forward" />
                  </View>
                </Right>
              </ListItem>
              <ListItem style={{ paddingTop: 20, paddingBottom: 20 }}>
                <Left>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-start' }}>412.216.4020</Text>
                </Left>
                <Right>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-start' }}>$51.04</Text>
                    <Icon name="arrow-forward" />
                  </View>
                </Right>
              </ListItem>
              <ListItem style={{ paddingTop: 20, paddingBottom: 20 }}>
                <Left>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-start' }}>412.215.3452</Text>
                </Left>
                <Right>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-start' }}>$51.04</Text>
                    <Icon name="arrow-forward" />
                  </View>
                </Right>
              </ListItem>

            </List>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  campaignImage: {
    width: Dimensions.get('window').width,
    height: 200,
    resizeMode: 'stretch'
  },
  icon: {
    color: 'black',
    fontSize: 40,
    width: 50
  },
});

export default Current
