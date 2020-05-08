export class quizQuestions {
    constructor(statement, options, correctChoice, uniqueKey) {
        this.statement = statement
        this.options = options
        this.correctChoice = correctChoice
        this.uniqueKey = uniqueKey
    }

    get choices() {
        return this.returnChoices()
    }

    returnChoices() {
        return this.options
    }
}
