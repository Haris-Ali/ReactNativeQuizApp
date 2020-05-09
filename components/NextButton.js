import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function ButtonComp({ textValue, onPressEvent, disabled, color }) {
    if (disabled)
        var buttonColor = 'gray'
    else 
        var buttonColor = color != undefined ? color : 'cornflowerblue'
    return (
        <TouchableOpacity onPress={onPressEvent} disbaled={disabled} >
            <View style={{...styles.button, backgroundColor: buttonColor}}>
                <Text style={styles.buttonText}>{textValue}</Text>
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