import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, Platform,
    TouchableWithoutFeedback } from 'react-native';

class ButtonComponent extends React.Component {
    _onPressButton() {
        Alert.alert('You pressed the button!')
    }

    _onLongPressButton() {
        Alert.alert('You long pressed!')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                    />
                    <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableHighlight</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Touchable Opacity</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableWithoutFeedback
                        onPress={this._onPressButton}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Touchable with Long Press</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default ButtonComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})