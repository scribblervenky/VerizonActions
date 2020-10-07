import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { Button, Icon, Text } from 'native-base';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './rootNavigation'
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
                <Stack.Navigator initialRouteName={'Billing'}>

                    <Stack.Screen
                        name="Billing"
                        component={Billing}
                        options={{
                            headerTitle: props => (<Text style={styles.title} >Billing</Text>),
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
                        }}
                    />

                    <Stack.Screen
                        name="MakePayment"
                        component={MakePayment}
                        options={{
                            headerTitle: props => (<Text style={styles.title} >Make a payment</Text>),
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
        fontSize: 20,
        fontWeight: "bold",
        left: -35
    }
});

export default Routes