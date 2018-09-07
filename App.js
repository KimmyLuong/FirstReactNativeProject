import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Blink from './components/Blink'
import FokinText from './components/TextStyle'
import BoxFillComponent from './components/BoxFillComponent'
import BoxFillFlex from './components/BoxFillFlex'

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://lh3.googleusercontent.com/-CusoQMYWkiI/VBDBqu3ft4I/AAAAAAAAESY/KIiZeZVWM5g/w1060-h778-n-rw/20140910_162354_259.jpg'
    }
    return (
      <View style={styles.container}>
       {/* <FokinText/> */}
        <Text style={[styles.red]}>My name is Eric</Text>
       {/* <BoxFillComponent/> */}
        {/* <Blink/> */}
        <Image source={pic} style={{width: 400, height: 300}}/>
        {/* <BoxFillFlex/> */}
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
      <Text style={[styles.bigBlue]}>Hello {this.props.name}</Text>
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
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
});
