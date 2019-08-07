import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Moment from 'moment';

//create my owner compoment
class Imagem extends Component{
  render(){    
    return (
      <Image source={this.props.source} style={{width:parseInt(this.props.width), height:parseInt(this.props.height)}} />      
      );
  }
}


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeNow: this.timeNow()
    };
  }
  
  componentDidMount(){
    setInterval(() =>{
      this.setState({
        timeNow: this.timeNow(),
      });
    }, 1000);
  }

  timeNow(){
    return Moment().format('hh:mm:ss');
  }
  render(){
    let img = {uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}
    
    return (
      <View style={styles.container}>        
        <Text style={styles.timeNow}>{this.timeNow()}</Text>
        <Imagem source={img} width='250' height='300'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeNow: {
    textShadowColor: '#0AAFE6',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 10,
    fontSize: 70,
    color: '#fff'
  },
  container: {
    flex: 1,
    //backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
