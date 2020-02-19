import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>DÖVİZ</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header:
    {
        height: 80,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textShadowColor: '#009466',
        textShadowOffset: { width: 0, height: 3 },
        elevation: 4,
        opacity: 0.7,
        backgroundColor: '#F5FCFF'
    },
    headerText:
    {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
    }
});