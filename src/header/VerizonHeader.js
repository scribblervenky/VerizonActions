import React from 'react'

import { View, Image, StyleSheet } from 'react-native';
import { Button, Icon, Header, Left, Body, Right, Title } from 'native-base';

import VerizonDrawer from '../drawer/VerizonDrawer'

class VerizonHeader extends React.Component {

    render() {
        return (
            <Header transparent={true}>
                <Left>
                    <Button
                        rounded
                        transparent
                        style={{ borderRadius: 50 }}
                        androidRippleColor="black"
                    >
                        <Icon style={{ color: 'black' }} name="arrow-back" />
                    </Button>
                </Left>
                <Body >
                    <View style={styles.title}>
                        <Image
                            style={styles.logo}
                            source={require('./verizon.png')}
                        />
                    </View>
                </Body>
                <Right>
                    <Button
                        rounded
                        transparent
                        style={{ borderRadius: 50 }}
                        androidRippleColor="black"
                    >
                        <Icon style={{ color: 'black' }} name="menu" />
                    </Button>
                </Right>
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        alignContent: 'center',
        left: 40
    },
    logo: {
        width: 150,
        height: 50,
    }
});

export default VerizonHeader
