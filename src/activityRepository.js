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
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
