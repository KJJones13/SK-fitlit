class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
    this.userID = sleepData.userID;
    this.date = sleepData.date;
    this.hoursSlept = sleepData.hoursSlept;
    this.sleepQuality = sleepData.sleepQuality;
  }

  getSleepHoursDay(userID, date) {
    // let sleepHours = this.sleepData.find(entry => entry.userID === userID && entry.date === date);
    return this.hoursSlept;
  }

  getSleepQualityDay(userID, date) {
    return this.sleepQuality;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
