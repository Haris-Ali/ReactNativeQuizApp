import { quizQuestions } from './Quiz'

export const questions = [
    new quizQuestions(
        'What is capital of Pakistan?',
        ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'],
        'Islamabad',
        Math.random().toString()
    ), 

    new quizQuestions(
        'What is language of Pakistan?',
        ['Urdu', 'Hindi', 'English', 'French'],
        'Urdu',
        Math.random().toString()
    ), 
]