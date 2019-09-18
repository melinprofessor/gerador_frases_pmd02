import React, { Component } from 'react';
// Esta é uma biblioteca que contém elementos personalizados
// Que podemos utilizar em nosso código.
import { Button} from "react-native-elements";
import { PropTypes } from 'prop-types';

// Este elemento é um componente de classe
export default class BotaoComponent extends Component {

static propTypes = {
        titulo: PropTypes.string,
        handleClick: PropTypes.func,
        cor: PropTypes.string

}
    render() {
        return (
            <Button
           
            title={this.props.titulo}
            icon={{ name:this.props.icone, size:30, color:"#5bc023"}}
            iconRight
            onPress={this.props.handleClick}
             />
        )
    }
}