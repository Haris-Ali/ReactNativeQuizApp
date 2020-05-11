import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function ButtonComp(props) {
    if (props.disabled)
        var buttonColor = 'gray'
    else 
        var buttonColor = props.color != undefined ? props.color : 'cornflowerblue'
    return (
        <TouchableOpacity onPress={props.onPressEvent} disabled={props.disabled}>
            <View style={{...styles.button, backgroundColor: buttonColor}}>
                <Text style={styles.buttonText}>{props.textValue}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50, 
        paddingVertical: 20,
        paddingHorizontal: 30,
    },

    buttonText: {
        color: 'white', 
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'serif'
    },
})