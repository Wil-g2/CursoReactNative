import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Constants from 'expo-constants';

class Botao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      viewBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 200,
        borderRadius: 25,
        backgroundColor: this.props.color,
      },
      textBtn: {
        color: '#ffffff',
        fontSize: 15,
        padding: 10,
        margin: 10,
      },
    });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={this.styles.viewBtn}>
          <Text style={this.styles.textBtn}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { frase: '' };
    this.frases = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
      'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
      'Siga os bons e aprenda com eles.',
    ];

    this.showPrase = this.showPrase.bind(this);
  }

  showPrase() {
    let s = this.state;
    s.frase = this.frases[(Math.floor(Math.random()*10))]
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/cookie.png')} />
        <Text style={styles.txt}> "{this.state.frase}"</Text>
        <Botao
          onPress={this.showPrase}
          text="Quebrar Biscoito"
          color="#A145CC"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 250,
  },
  txt: {
    margin: 10,
    color: '#A145CC',
    fontSize: 20,
    fontStyle: 'italic',
    textAlign:'center'
  },
});
