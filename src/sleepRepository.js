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

  getAverageSleepHours(userID) {
    let userEntries = this.sleepData.filter(user => user.userID === userID);
    let totalSleepHours = userEntries.reduce((hours, user) => {
      return hours += user.hoursSlept
    }, 0)
    return parseFloat(((totalSleepHours / userEntries.length)).toFixed(1))
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
