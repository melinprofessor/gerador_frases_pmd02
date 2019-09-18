import React from "react";
import {Button, View} from 'react-native';


export const BotaoFunction = props => (
    <View style={{marginTop: 20}}>
        <Button title={props.titulo} color="#CCC" />
    </View>
    
)