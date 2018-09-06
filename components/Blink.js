import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Blink extends React.Component{

    
    constructor(props){
        super(props)
        this.state = {isShowingText:true}
        
        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: !previousState.isShowingText,}
            })
        }, 1000)
        
    }
    
    render() {
        let pic = {
            uri: 'https://lh3.googleusercontent.com/-CusoQMYWkiI/VBDBqu3ft4I/AAAAAAAAESY/KIiZeZVWM5g/w1060-h778-n-rw/20140910_162354_259.jpg'
        }
        let display = this.state.isShowingText ? 'this.props.text' : ' '
        if(this.state.isShowingText){
            return(
                <Image source={pic} style={{width: 400, height: 300}}/>
            )
        } 
        return null
    }
}

export default Blink