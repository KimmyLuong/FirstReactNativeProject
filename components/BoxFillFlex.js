import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BoxFillFlex extends React.Component{
    render() {
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor:'powderblue'}}/>
                <View style={{flex: 2, backgroundColor:'skyblue'}}/>
                <View style={{flex: 3, backgroundColor:'steelblue'}}/>
            </View>
        )
    }
}

export default BoxFillFlex