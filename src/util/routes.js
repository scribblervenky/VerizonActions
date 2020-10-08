import React, { Component } from 'react'
import { StyleSheet, Dimensions, Image } from 'react-native';
import { Button, Icon, Text } from 'native-base';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './rootNavigation'
import Home from '../home/Home'
import Billing from '../billing/Billing'
import MakePayment from '../billing/MakePayment'
import Account from '../billing/Account'
import More from '../billing/More'
import VerizonHeader from '../header/VerizonHeader'

class Routes extends Component {

    render() {
        const Stack = createStackNavigator()

        return (
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator initialRouteName={'Home'}>

                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerTitle: props => (<Text style={styles.plainTitle} >Welcome</Text>),
                            headerLeft: () => (
                                <Image
                                    style={styles.logo}
                                    source={require('../assets/images/verizonLogo.png')}
                                />
                            ),
                            headerRight: () => (
                                <Icon style={styles.icon} type="AntDesign" name="message1" />
                            ),
                            ...TransitionPresets.SlideFromRightIOS,
                        }}
                    />


                    <Stack.Screen
                        name="Billing"
                        component={Billing}
                        options={{
                            headerTitle: props => (<Text style={styles.title} >Bill</Text>),
                            headerLeft: () => (
                                <Button
                                    rounded
                                    transparent
                                    style={{ borderRadius: 50 }}
                                    androidRippleColor="black"
                                >
                                    <Icon
                                        style={{ color: 'black' }}
                                        type='AntDesign'
                                        name="left"
                                    />
                                </Button>
                            ),
                            ...TransitionPresets.SlideFromRightIOS,
                        }}
                    />

                    <Stack.Screen
                        name="MakePayment"
                        component={MakePayment}
                        options={{
                            headerTitle: props => (<Text style={styles.title} >MakePayment</Text>),
                            headerLeft: () => (
                                <Button
                                    rounded
                                    transparent
                                    style={{ borderRadius: 50 }}
                                    androidRippleColor="black"
                                >
                                    <Icon
                                        style={{ color: 'black' }}
                                        type='AntDesign'
                                        name="left"
                                    />
                                </Button>
                            ),
                            ...TransitionPresets.SlideFromRightIOS,
                        }}
                    />

                    <Stack.Screen
                        name="Account"
                        component={Account}
                        options={{
                            headerTitle: props => (<Text style={styles.title} >Account</Text>),
                            headerLeft: () => (
                                <Button
                                    rounded
                                    transparent
                                    style={{ borderRadius: 50 }}
                                    androidRippleColor="black"
                                >
                                    <Icon
                                        style={{ color: 'black' }}
                                        type='AntDesign'
                                        name="left"
                                    />
                                </Button>
                            ),
                            ...TransitionPresets.SlideFromRightIOS,
                        }}
                    />

                    <Stack.Screen
                        name="More"
                        component={More}
                        options={{
                            headerTitle: props => (<Text style={styles.title} >More</Text>),
                            headerLeft: () => (
                                <Button
                                    rounded
                                    transparent
                                    style={{ borderRadius: 50 }}
                                    androidRippleColor="black"
                                >
                                    <Icon
                                        style={{ color: 'black' }}
                                        type='AntDesign'
                                        name="left"
                                    />
                                </Button>
                            ),
                            ...TransitionPresets.SlideFromRightIOS,
                        }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: "bold",
        left: -35
    },
    plainTitle: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: "bold",
    },
    logo: {
        width: 60,
        height: 50,
        resizeMode: 'stretch',
    },
    icon: {
        color: 'black',
        paddingRight: 10
    },
});

export default Routes