import React from 'react'

import { View, Image, StyleSheet, Dimensions, Linking, ScrollView } from 'react-native';
import { Container, Text, List, ListItem, Left, Right, Icon } from 'native-base';
import { pathMap } from '../util/imageRouter';
import VerizonFooter from '../footer/VerizonFooter'

class Home extends React.Component {


  render() {
    return (
      <Container>
        <ScrollView style={styles.container}>
          <View style={{ paddingLeft: 20, paddingTop: 30 }}>
            <Text style={{ fontFamily: 'NHaasGroteskTXPro-75Bd', fontSize: 30, fontWeight: 'bold', paddingBottom: 10 }}>
              Hey, Alexa Devs
            </Text>
            <Image
              style={styles.campaignImage}
              source={require('../assets/images/campaign.jpg')}
            />
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
            <List>
              <ListItem>
                <View style={{backgroundColor:'black', height: 10, width: Dimensions.get('window').width*0.85}}/>
              </ListItem>
              <ListItem>
                <Left>
                  <Icon style={styles.icon} type="MaterialCommunityIcons" name="cellphone-android" />
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-start' }}>My Plan</Text>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', alignSelf: 'flex-start' }}>View or change plans</Text>
                  </View>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Icon style={styles.icon} type="MaterialCommunityIcons" name="account-circle-outline" />
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Account Settings</Text>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', alignSelf: 'flex-start' }}>set basic roles</Text>
                  </View>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Icon style={styles.icon} type="AntDesign" name="setting" />
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Preferences</Text>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', alignSelf: 'flex-start' }}>set and manage</Text>
                  </View>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Icon style={styles.icon} type="MaterialIcons" name="phonelink-setup" />
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-start' }}>Add-Ons</Text>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', alignSelf: 'flex-start' }}>Browse and add more</Text>
                  </View>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </View>
        </ScrollView>
        <VerizonFooter {...this.props} />
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

export default Home
