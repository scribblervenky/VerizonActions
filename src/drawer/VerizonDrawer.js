import React, { Component } from 'react';
import { Drawer, Text } from 'native-base';
// import SideBar from './yourPathToSideBar';

export default class VerizonDrawer extends Component {
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    componentDidMount() {
        this.openDrawer()
    }

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                side="right"
                content={<Text>test</Text>}
                onClose={() => this.closeDrawer()}
            > 
            </Drawer>
        );
    }
}