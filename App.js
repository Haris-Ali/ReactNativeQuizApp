import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { questions } from './components/Questions'

export default function App() {
  const [screen, setScreen] = useState('Start')

  const changeScreen = () => {
    setScreen('Quiz')
  }

  const startScreen = (
    <View>
      <Text style={styles.titleText} >Welcome to the quiz app.</Text>   
      <Button style={styles.buttonStyle} title="Start Quiz" onPress={changeScreen} />
    </View>
  )

  const quizScreen = (
    <View>
      <Text>{questions[0].statement}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      {screen == 'Start' ? startScreen : quizScreen}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 30,
    fontFamily: 'monospace',
    paddingBottom: 30,
  }, 

});