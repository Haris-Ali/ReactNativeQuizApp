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

    new quizQuestions(
        'Pakistan belongs to which continent?',
        ['Europe', 'Australia', 'Asia', 'Africa'],
        'Asia',
        Math.random.toString()
    ),

    new quizQuestions(
        'Which of these is NOT a JS framework?',
        ['React', 'Angular', 'Laravel', 'Vue'],
        'Laravel',
        Math.random.toString()
    ), 

    new quizQuestions(
        'How do you bold text in MS Word?',
        ['CTRL + B', 'SHIFT + B', 'ALT + B', 'TAB + B'],
        'CTRL + B',
        Math.random.toString()
    ), 

    new quizQuestions(
        'Which is not a programming language? ',
        ['Java', 'Python', 'C#', 'Word'],
        'Word',
        Math.random.toString()
    ), 

    new quizQuestions(
        'Binary code is made of which numbers?',
        ['0 and 1', '0 and 2', '1 and 9', '5 and 6'],
        '0 and 1',
        Math.random.toString()
    ), 

    new quizQuestions(
        'Who created World Wide Web?',
        ['Ward Christensen', 'Mercian Hoff', 'Tim Berners', 'Mubarak Ali'],
        'Tim Berners',
        Math.random.toString()
    ), 

    new quizQuestions(
        'The synonym of Abbreviation?',
        ['Long Form', 'Short Form', 'Medium Form', 'None of these'],
        'Short Form',
        Math.random.toString()
    ), 

    new quizQuestions(
        'The synonym of Warrior?',
        ['Soldier', 'Judge', 'Driver', 'Thief'],
        'Soldier',
        Math.random.toString()
    ), 
]