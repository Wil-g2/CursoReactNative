import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { iniciar: 'Iniciar', reset: 'Reiniciar', time: 0.0 }
    this.timer = null
    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
  }

  start() {
    let s = this.state    
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
      
      if (s.iniciar=='Iniciar'){
        s.iniciar = 'Parar'
      }else{
        s.iniciar = 'Iniciar'
      }      
      this.setState(s)
    } else {
      if (s.iniciar=='Iniciar'){
        s.iniciar = 'Parar'
      }else{
        s.iniciar = 'Iniciar'
      }      
      this.timer = setInterval(() => {
        s.time += 0.1;
        this.setState(s)
      }, 100);
      console.log(s.time)
    }
  }

  reset(){    
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
      let s = this.state
      s.time = 0.0 
      s.iniciar = 'Iniciar'
      this.setState(s)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/relogio.png')} style={styles.img} />
        <Text style={styles.timer}>{this.state.time.toFixed(1)}</Text>

        <View style={styles.viewBtn}>
          <TouchableOpacity style={styles.btn} onPress={this.start}>
            <Text style={styles.text}>{this.state.iniciar}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.reset}>
            <Text style={styles.text}>{this.state.reset}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 50,
    backgroundColor: '#213e64',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    color: '#baa07a',
    marginTop: -150,
    fontSize: 80,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  viewBtn: {
    flex: 1,
    backgroundColor: '##baa07a',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    padding: 15,
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#baa07a',
    margin: 10,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
  },
});
