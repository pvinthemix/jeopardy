class DailyDouble extends Question {
  constructor(roundClues) {
    super(roundClues);
      this.dailyDouble = true; 

  }
}

if (typeof module !== 'undefined') {
  module.exports = DailyDouble;
}
