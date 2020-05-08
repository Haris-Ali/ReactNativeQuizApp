import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { questions } from './components/Questions'

export default function App() {
  const [screen, setScreen] = useState('Start')
  const [getQuestions, setQuestions] = useState(questions)

  const changeScreen = () => {
    setScreen('Quiz')
  }


  /* Start component */
  const startScreen = (
    <View style={{paddingTop: 400}} >
      <Text style={styles.titleText} >Welcome to the quiz app.</Text>   
      <Button style={{width: '60%'}} title="Start Quiz" onPress={changeScreen} />
    </View>
  )


  /* Quiz component */
  const quizScreen = (
    <View>
      <ScrollView style={quizStyles.scrollView}>
        {getQuestions.map((item, index) => 
          <View>
            <Text style={quizStyles.statement}>{item.statement}</Text>
            <TouchableOpacity key={item.uniqueKey} activeOpacity={0.7}>
              <View style={quizStyles.choiceCont}>
                <Text style={quizStyles.choiceText}>{item.choices}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  )

  return (
    /* Main view in which components will be displayed */
    <View style={styles.container}>
      {screen == 'Start' ? startScreen : quizScreen}
    </View>
    
  );
}


/* Styles for main view and start component */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  titleText: {
    fontSize: 30,
    fontFamily: 'monospace',
    paddingBottom: 50,
    textAlign: 'center'
  }, 

});


/* Styles for the quiz component */
const quizStyles = StyleSheet.create({
  scrollView: {
    width: '100%',
    paddingTop: 300,
  }, 

  statement: {
    fontSize: 24,
    fontFamily: 'monospace',
    textAlign: 'center',
    paddingBottom: 10,
  },  

  choiceCont: {
    backgroundColor: 'cornflowerblue',
    alignSelf: 'center',
    width: '70%',
    padding: 8,
    margin: 3,
    borderRadius: 50,
  },

  choiceText: {
    fontSize: 24,
    color: 'white',
    padding: 12, 
    fontFamily: 'monospace',
  }

})