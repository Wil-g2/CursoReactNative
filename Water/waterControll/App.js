import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consumido: 0,
      status: 'Ruim',
      pct: 0,
    };
    this.updateField = this.updateField.bind(this);
    this.addWater = this.addWater.bind(this);
  }

  updateField() {
    let s = this.state;
    s.pct = Math.floor((s.consumido / 2000) * 100);
    console.log(s.status);
    if (parseInt(s.pct) >= 100) {
      s.status = 'Bom';
    } else {
      s.status = 'Ruim';
    }
    this.setState(s);
  }
  addWater() {
    let s = this.state;
    s.consumido += 200;
    this.setState(s);
    this.updateField();
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgimage}
          source={require('./assets/waterbg.png')}>
          <View style={styles.viewInfo}>
            <View style={styles.viewContent}>
              <Text style={styles.textinfo}>Meta</Text>
              <Text style={styles.textContent}>2000</Text>
            </View>
            <View style={styles.viewContent}>
              <Text style={styles.textinfo}>Consumido</Text>
              <Text style={styles.textContent}>{this.state.consumido}ml</Text>
            </View>
            <View style={styles.viewContent}>
              <Text style={styles.textinfo}>Status</Text>
              <Text style={styles.textContent}>{this.state.status}</Text>
            </View>
          </View>
          <View style={styles.viewPct}>
            <Text style={styles.textPct}>{this.state.pct}%</Text>
          </View>
          <View style={styles.viewBtn}>
            <Button title="Beber 200 ml" onPress={this.addWater} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  bgimage: {
    flex: 1,
    width: null,
  },

  viewInfo: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
  },

  viewContent: {
    flex: 1,
    alignItems: 'center',
  },

  textinfo: {
    color: '#45b2fc',
    fontSize: 20,
  },

  textContent: {
    color: '#2b4274',
    fontWeight: 'bold',
    fontSize: 20,
  },
  viewPct: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textPct: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 50,
    color: '#ffffff',
  },
  viewBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
