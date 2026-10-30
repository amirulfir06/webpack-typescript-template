type Answer = {
  sectionId : number
  questionId : number
  questionTitle: string
  answer: unknown
}

class SurveyState {
  currentSection: number = 1
  answers: Answer[] = []

  setAnswer(sectionid:number, questionid:number, questiontitle:string, answer:unknown){
    this.answers.push({
      sectionId: sectionid,
      questionId:questionid,
      questionTitle:questiontitle,
      answer:answer
    })
  }

  getAnswer(){
    return this.answers
  }

}

const surveyState = new SurveyState()

const firstsection = document.querySelector('#first')
firstsection?.addEventListener('click', ()=> {

  const answers = surveyState.getAnswer()

  if(answers.length == 0){
    surveyState.setAnswer(1,1,'Know SOCSO ?', 'Yes')
  }

  else{
    surveyState.setAnswer(2,1,'For how long', '3 years')
    console.log(answers)
  }
})

const secondsection = document.querySelector('#second')
secondsection?.addEventListener('click', ()=> {
  surveyState.setAnswer(2,1,'For how long', '3 years')

  const answers = surveyState.getAnswer()
  console.log(answers)
})