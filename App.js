import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { questions } from './components/Questions'
import ButtonComp from './components/NextButton'

export default function App() {
  /* Loop to select 5 random questions from the question bank */
  const quizArray = []
  var addedIndex = []
  for (var i = 0; i < 5; i++) {
    let randomID
    do {
      randomID = Math.floor(Math.random() * questions.length)
    } while(addedIndex.indexOf(randomID) > -1)
    addedIndex.push(randomID)
    quizArray.push(questions[randomID])
  }


  /* Ref for each element for the color change. 
  Global variable to hold selected item's id used for reseting. */
  const myRefs = React.useRef([])

  /* All the states being used in the app */
  const [questionNum, setquestionNum] = useState(0)
  const [screen, setScreen] = useState('Start')
  const [getQuestions, setQuestions] = useState(quizArray[0])
  const [score, setScore] = useState(0)
  const [validate, setValidate] = useState(0)
  const [itemID, setitemID] = useState(0)


  /* Function to change screen when start quiz is pressed */
  const changeScreen = () => {
    setScreen('Quiz')
  }


  /* Function which checks if the answer is correct or not */
  const checkAnswer = (selectedOption, correctOption, selectedID) => {
    setValidate(1)
    setitemID(selectedID)
    if (selectedOption === correctOption) {
      setScore(score + 1)
      myRefs.current[selectedID].setNativeProps({style: {backgroundColor: 'green'}})
    }
    else {
      Alert.alert("Your answer was incorrect! \nCorrect answer: " + correctOption)
      myRefs.current[selectedID].setNativeProps({style: {backgroundColor: 'red'}})
    }
  }

  /* Function which loads next question when next is pressed */
  const loadNextQuestion = () => {
    setquestionNum(questionNum + 1)
    setQuestions(questions[questionNum])
    setValidate(0)
    myRefs.current[itemID].setNativeProps({style: {backgroundColor: 'cornflowerblue'}})
  }


  /* Function that resets all states when quiz is finished and goes to start screen */
  const finishQuiz = () => {
    setquestionNum(0)
    setScreen('Start')
    setQuestions(quizArray[0])
    setScore(0)
    setValidate(0)
  }


  /* Start component */
  const startScreen = (
    <View style={{paddingTop: 400}}>
      <Text style={styles.titleText} >Welcome to the quiz app.</Text>   
      <Button style={{width: '60%'}} title="Start Quiz" onPress={changeScreen}/>
    </View>
  )


  /* Quiz component */
  const quizScreen = (
    <View>
      <ScrollView style={quizStyles.scrollView}>
        <View>
          <View style={quizStyles.infoCont}>
            <Text style={quizStyles.scoreText}>Score: {score} / 5</Text>
            <Text style={quizStyles.questionNum}>Question: {questionNum + 1} / 5</Text>
          </View>
          <Text style={quizStyles.statement}>{getQuestions.statement}</Text>
          {getQuestions.options.map((optionItem, optionIndex) =>
            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={() => checkAnswer(optionItem, getQuestions.correctChoice, optionIndex)}>
              <View 
                style={quizStyles.choiceCont}
                ref={el => myRefs.current[optionIndex] = el}>
                <Text style={quizStyles.choiceText}>{optionIndex + 1}. {optionItem}</Text>
              </View>
            </TouchableOpacity>
          )}
          <View style={quizStyles.buttonCont}>
            <ButtonComp 
              textValue={questionNum === 4 ? 'Finish' : 'Next'}
              onPressEvent={questionNum === 4 ? finishQuiz : loadNextQuestion}
              color='#06623B'
              disabled={validate == 0}
            />
          </View>
        </View>
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