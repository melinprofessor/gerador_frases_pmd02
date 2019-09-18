import React, { Component } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native';
const img = require('./img/logo.png');

import BotaoComponent from './components/BotaoComponent';
import {BotaoFunction} from './components/BotaoFunction';

const frases = ["O dia esta belo", "Frases diferentes", "teste", "raff"]

const handleGerarFrase = () => {

  const frase = frases[Math.floor(Math.random() * frases.length)]
  Alert.alert("Frase Gerada", frase);
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={estilo.container}>
        <Image source={img} />
        <View style={estilo.botaoContainer}>
          <BotaoComponent
            titulo="Gerar Frase"
            cor="#CCC"
            icone="cached"
            handleClick={handleGerarFrase}
          />
          <BotaoFunction titulo="Teste 2"/>
        </View>
      </View>

    );
  }

};

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoContainer: {
    marginTop: 20
  }
})

export default App;
