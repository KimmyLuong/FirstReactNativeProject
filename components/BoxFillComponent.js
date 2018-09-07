import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BoxFillComponent extends React.Component{
    render() {
        return (
            <View>
                <View style={{height: 50, width: 50, backgroundColor:'powderblue'}}/>
                <View style={{height: 100, width: 100, backgroundColor:'skyblue'}}/>
                <View style={{height: 150, width: 150, backgroundColor:'steelblue'}}/>
            </View>
        )
    }
}

export default BoxFillComponent