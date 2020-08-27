class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
    this.userID = sleepData.userID;
    this.date = sleepData.date;
    this.hoursSlept = sleepData.hoursSlept;
    this.sleepQuality = sleepData.sleepQuality;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
