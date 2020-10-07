import React from 'react'

import { View, Image, StyleSheet, Dimensions  } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 0
    },
    phone: {
        width:  Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'stretch',
    },
});

class Phone extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.phone}
                    source={require('./phoneImg.jpg')}
                />
            </View>
        );
    }
}

export default Phone
