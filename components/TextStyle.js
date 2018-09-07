import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TextStyle extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            titleText: "This is the Title",
            bodyText: "This is the body Text"
        }
    }

    render() {
        return (
            <View>
                <Text style={[styles.baseText]}>
                    <Text style={[styles.titleText]}>
                        {this.state.titleText}{'\n'}{'\n'}
                    </Text>
                    <Text>
                        {this.state.bodyText}
                    </Text>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'sans-serif'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default TextStyle