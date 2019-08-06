import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: '', altura: '', peso: ''}

    this.calc = this.calc.bind(this);
  }
  calc() {    
    let s = this.state;
    if ((isNaN(s.peso)) || (isNaN(s.altura))){
      Alert.alert('Preencha um peso ou Altura válido.')
      return
    }
    let res = (parseFloat(s.peso) / ((parseFloat(s.altura) * 2))).toFixed(2)
  
    if (res < 17) {
      s.result = 'Muito abaixo do peso'
    }else if(res <18.49){
      s.result = 'Abaixo do peso'    
    }else if(res <24.99){
      s.result = 'Peso normal'    
    }else if(res <29.99){
      s.result = 'Acima do peso'    
    }else if(res <34.99){
      s.result = 'Obesidade I'    
    }else if(res <39.99){
      s.result = 'Obesidade II (severa)'    
    }else{
      s.result = 'Obesidade III (mórbida)'    
    }
    console.log(res)
    this.setState(s);    
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('./assets/balance.png')}/>
        <Text style={styles.text}>IMC</Text>
        <TextInput
          placeholder="Peso ex.80"
          onChangeText={peso => this.setState({ peso })}
          value={this.state.peso}
          style={styles.input} clearTextOnFocus
        />
        <TextInput
          placeholder="altura ex.1.75"
          onChangeText={altura => this.setState({ altura })}
          value={this.state.altura}
          style={styles.input} clearTextOnFocus
        />
        <TouchableOpacity onPress={this.calc} style={styles.btn}>
          <Text style={styles.textBtn}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#667DFF',
    padding: 8,
  },
  img:{
    height:250,
    width:250,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 30,
    width:250,
    color: '#ffffff',
    fontSize: 18,
    borderColor: '#ffffff',
    borderWidth: 2,
    margin: 5,
    borderRadius: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#0D1E80',
    width: 250,
    height: 35,
    borderRadius: 20,
  },
  textBtn: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
});
