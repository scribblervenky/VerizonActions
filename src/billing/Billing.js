import React from 'react'

import { View, Image, StyleSheet, Dimensions, Linking, ScrollView } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Button } from 'native-base';
import { pathMap } from '../util/imageRouter';
import Current from './Current'
import VerizonFooter from '../footer/VerizonFooter';

const styles = StyleSheet.create({
    container: {
        paddingTop: 0
    },
    imagee: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'stretch',
    },
    tabHeader: {
        backgroundColor: "white"
    },
    tabText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700'
    },
});


class Billing extends React.Component {

    componentDidMount() {

        const getUrlAsync = async () => {
            // Get the deep link used to open the app

            const initialUrl = await Linking.getInitialURL();

        };
        getUrlAsync();
    }

    render() {
        
        return (
            <Container>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: 'red' }}>

                    <Tab heading={
                        <TabHeading style={styles.tabHeader}>
                            <Text style={styles.tabText}>Current</Text>
                        </TabHeading>
                    }>
                        <Current {...this.props}/>
                    </Tab>

                    <Tab heading={
                        <TabHeading style={styles.tabHeader}>
                            <Text style={styles.tabText}>Changes</Text>
                        </TabHeading>
                    }>
                        <ScrollView style={styles.container}>
                            <Image
                                style={styles.imagee}
                                source={pathMap['septBill']}
                            />
                        </ScrollView>
                    </Tab>

                    <Tab heading={
                        <TabHeading style={styles.tabHeader}>
                            <Text style={styles.tabText}>Next Bill</Text>
                        </TabHeading>
                    }>
                        <ScrollView style={styles.container}>
                            <Image
                                style={styles.imagee}
                                source={pathMap['nextBill']}
                            />
                        </ScrollView>
                    </Tab>

                    <Tab heading={
                        <TabHeading style={styles.tabHeader}>
                            <Text style={styles.tabText}>History</Text>
                        </TabHeading>
                    }>
                        <ScrollView style={styles.container}>
                            <Image
                                style={styles.imagee}
                                source={pathMap['latestPayment']}
                            />
                        </ScrollView>
                    </Tab>
                </Tabs>
            
            <VerizonFooter {...this.props}/>

            </Container>
        );
    }
}

export default Billing
