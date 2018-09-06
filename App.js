import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Blink from './components/Blink'

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://lh3.googleusercontent.com/-CusoQMYWkiI/VBDBqu3ft4I/AAAAAAAAESY/KIiZeZVWM5g/w1060-h778-n-rw/20140910_162354_259.jpg'
    }
    return (
      <View style={styles.container}>
        <Text>My name is Eric</Text>
        <Blink/>
        {/* <Image source={pic} style={{width: 400, height: 300}}/> */}
        <View style={{alignItems:'center'}}>
          <UnlimitedGreetingWorks name='No'/>
          <UnlimitedGreetingWorks name='Yes'/>
          <UnlimitedGreetingWorks name='Doge'/>
          <UnlimitedGreetingWorks name='Doggo'/>
        </View>
        
      </View>
    );
  }
}

class UnlimitedGreetingWorks extends React.Component{
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
