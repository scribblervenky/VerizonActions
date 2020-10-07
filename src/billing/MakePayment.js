import React from 'react'
import { View, Image, StyleSheet, Dimensions, Linking, ScrollView } from 'react-native';
import { Container, Text } from 'native-base';

import { pathMap } from './Billing';
import VerizonFooter from '../footer/VerizonFooter'

class MakePayment extends React.Component {

    render() {
        return (
            <Container>
                <ScrollView style={styles.container}>
                    <Image
                        style={styles.imagee}
                        source={pathMap['selectPayment']}
                    />
                </ScrollView>
                <VerizonFooter {...this.props}/>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    imagee: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'stretch',
    }
});
export default MakePayment
