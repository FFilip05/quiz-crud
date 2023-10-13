type Quiz = {
    id:string,
    name: string,
}
type Question = {
    id:string,
    question:string,
    answers:string[],
    quizId: string
}
type answers = {
    id: string,
    question_id:string,
    content:string,
    isCorrect:boolean
}