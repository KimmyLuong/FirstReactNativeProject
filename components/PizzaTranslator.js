import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class PizzaTranslator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View style={{padding: 10, width: 300}}>
                <TextInput
                    style={{height: 40, flexDirection:'row'}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        )
    }
}

export default PizzaTranslator