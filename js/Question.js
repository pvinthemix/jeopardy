class Question {
  constructor(clueObj){
    this.question = clueObj.question;
    this.pointValue = clueObj.pointValue;
    this.answer = clueObj.answer;
    this.categoryID = clueObj.categoryID;
  }
}





if (typeof module !== 'undefined'){
  module.exports = Question;
}