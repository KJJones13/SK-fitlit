class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData;
    this.userID = activityData.userID;
    this.date = activityData.date;
    this.numSteps = activityData.numSteps;
    this.minutesActive = activityData.minutesActive;
    this.flightsOfStairs = activityData.flightsOfStairs;
  }

  calculateMilesWalked(user) {
    return parseFloat(((this.numSteps * user.strideLength) / 5280).toFixed(2));
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
