import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Blink from './components/Blink'
import FokinText from './components/TextStyle'
import BoxFillComponent from './components/BoxFillComponent'
import BoxFillFlex from './components/BoxFillFlex'
import PizzaTranslator from './components/PizzaTranslator'
import ButtonComponent from './components/ButtonComponent'
import FlatListComponent from './components/FlatListComponent'
import RestComponent from './components/RestComponent'

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://lh3.googleusercontent.com/-CusoQMYWkiI/VBDBqu3ft4I/AAAAAAAAESY/KIiZeZVWM5g/w1060-h778-n-rw/20140910_162354_259.jpg'
    }
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          {/* <FokinText/> */}
          {/* <PizzaTranslator /> */}
          <RestComponent/>
          <FlatListComponent/>
          {/* <ButtonComponent/> */}
          <Text style={[styles.red]}>My name is Eric</Text>
          {/* <BoxFillComponent/> */}
          {/* <Blink/> */}
          <Image source={pic} style={{ width: 200, height: 100 }} />
          {/* <BoxFillFlex/> */}
          <View style={{ alignItems: 'center' }}>
            <UnlimitedGreetingWorks name='No' />
            <UnlimitedGreetingWorks name='Yes' />
            <UnlimitedGreetingWorks name='Doge' />
            <UnlimitedGreetingWorks name='Doggo' />
          </View>
        </View>
      </ScrollView>
    );
  }
}

class UnlimitedGreetingWorks extends React.Component {
  render() {
    return (

      
      <Text style={[styles.bigBlue]}>Hello {this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white'
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
