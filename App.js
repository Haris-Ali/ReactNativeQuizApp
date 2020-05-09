import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { questions } from './components/Questions'
import ButtonComp from './components/NextButton'

export default function App() {
  const [screen, setScreen] = useState('Start')
  const [getQuestions, setQuestions] = useState(questions)
  const [score, setScore] = useState(0)
  
  const changeScreen = () => {
    setScreen('Quiz')
  }

  const checkAnswer = (selectedOption, correctOption) => {
    if (selectedOption === correctOption) {
      Alert.alert("Your answer is correct!")
      setScore(score + 1)
    }
    else {
      Alert.alert("Your answer was incorrect! \nCorrect answer: " + correctOption)
    }
  }

  const loadNextQuestion = () => {

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
          <View key={item.uniqueKey} >
            <View style={quizStyles.infoCont}>
              <Text style={quizStyles.scoreText} >Score: {score}</Text>
              <Text style={quizStyles.questionNum}>Question: {index + 1} / 5</Text>
            </View>
            <Text style={quizStyles.statement}>{item.statement}</Text>
            {item.options.map((optionItem, optionIndex) =>
              <TouchableOpacity 
                activeOpacity={0.7} 
                onPress={() => checkAnswer(optionItem, item.correctChoice)}>
                <View style={quizStyles.choiceCont}>
                  <Text style={quizStyles.choiceText}>{optionIndex + 1}. {optionItem}</Text>
                </View>
              </TouchableOpacity>
            )}
            <View style={quizStyles.buttonCont} >
              <ButtonComp 
                textValue="Next"
                onPressEvent={loadNextQuestion}
                color='#3C4245'
                disabled={index === 5}
              />
            </View>
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
    fontFamily: 'serif',
    paddingBottom: 50,
    textAlign: 'center'
  }, 

});


/* Styles for the quiz component */
const quizStyles = StyleSheet.create({
  scrollView: {
    width: '100%',
    paddingTop: 200,
  }, 

  infoCont: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  scoreText: {
    fontSize: 20,
    fontFamily: 'serif',
    paddingBottom: 40,
    textAlign: 'center',
    paddingLeft: 10,
  },

  questionNum: {
    fontSize: 20,
    fontFamily: 'serif',
    paddingBottom: 40,
    textAlign: 'center',
    paddingRight: 10,
  },

  statement: {
    fontSize: 24,
    fontFamily: 'serif',
    textAlign: 'center',
    paddingBottom: 20,
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
    fontFamily: 'serif',
  }, 

  buttonCont: {
    paddingTop: 40,
    alignSelf: 'center',
    width: 280,
    height: 200,
    alignItems: 'flex-end'
  }, 
})