class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData;
  }

  calculateMilesWalked(userID, date, user) {
    let dayEntry = this.activityData.filter(entry => entry.userID === userID && entry.date === date);
    return parseFloat(((dayEntry[0].numSteps * user.strideLength) / 5280).toFixed(2));
  }

  checkStepGoal(userID, date, user) {
    let dayEntry = this.activityData.filter(entry => entry.userID === userID && entry.date === date);
    return dayEntry[0].numSteps > user.dailyStepGoal;
  }

  getMinutesActive(userID, date) {
    let dayEntry = this.activityData.filter(entry => entry.userID === userID && entry.date === date);
    return dayEntry[0].minutesActive;
  }

  getMinutesActiveAverageWeek(userID, date) {
    let startDate = this.activityData.indexOf(this.activityData.find(item => item.userID === userID && item.date === date));
    let weekEntries = this.activityData.slice(startDate, (startDate + 7));
    let weeklyMinutesActive = weekEntries.map(entry => entry.minutesActive);
    let averageMinActive = weeklyMinutesActive.reduce((min, entry) => {
      return min += entry;
    }, 0)
    return parseFloat((averageMinActive / weeklyMinutesActive.length).toFixed(0));
  }

  getAllTimeStairRecord(userID) {
    let userEntries = this.activityData.filter(user => user.userID === userID);
    let allStairsInfo = userEntries.map(entry => entry.flightsOfStairs);
    let sortedStairInfo = allStairsInfo.sort((a, b) => b - a);
    return sortedStairInfo[0];
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
