class ActivityRepository {
  constructor(activityData, data) {
    this.activityData = activityData;
    this.data = data;
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

  getFlightsOfStairsAverageWeek(userID, date) {
    let startDate = this.activityData.indexOf(this.activityData.find(item => item.userID === userID && item.date === date));
    let weekEntries = this.activityData.slice(startDate, (startDate + 7));
    let weeklyFlightsOfStairs = weekEntries.map(entry => entry.flightsOfStairs);
    let averageFlightsOfStairs = weeklyFlightsOfStairs.reduce((min, entry) => {
      return min += entry;
    }, 0)
    return parseFloat((averageFlightsOfStairs / weeklyFlightsOfStairs.length).toFixed(0));
  }

  getStepCountAverageWeek(userID, date) {
    let startDate = this.activityData.indexOf(this.activityData.find(item => item.userID === userID && item.date === date));
    let weekEntries = this.activityData.slice(startDate, (startDate + 7));
    let weeklyStepCount = weekEntries.map(entry => entry.numSteps);
    let averageStepCount = weeklyStepCount.reduce((min, entry) => {
      return min += entry;
    }, 0)
    return parseFloat((averageStepCount / weeklyStepCount.length).toFixed(0));
  }

  getAllTimeStairRecord(userID) {
    let userEntries = this.activityData.filter(user => user.userID === userID);
    let allStairsInfo = userEntries.map(entry => entry.flightsOfStairs);
    let sortedStairInfo = allStairsInfo.sort((a, b) => b - a);
    return sortedStairInfo[0];
  }

  getStepGoalWinDays(userID, user) {
    let userEntries = this.activityData.filter(user => user.userID === userID);
    let stepGoalMetEntries = userEntries.filter(entry => entry.numSteps > user.dailyStepGoal);
    let days = stepGoalMetEntries.map(entry => entry.date)
    return days;
  }

  getAllUserAverageStairs(date) {
    let userEntries = this.activityData.filter(user => user.date === date);
    let allStairsClimbed = userEntries.map(stair => stair.flightsOfStairs);
    let allStairTotal = allStairsClimbed.reduce((stairs, entry) => {
      return stairs += entry;
    }, 0)
    return parseFloat(((allStairTotal / allStairsClimbed.length)).toFixed(0))
  }

  getAllUsersAverageSteps(date) {
    let userEntries = this.activityData.filter(user => user.date === date);
    let allStepsTaken = userEntries.map(step => step.numSteps);
    let allStepTotal = allStepsTaken.reduce((steps, entry) => {
      return steps += entry;
    }, 0)
    return parseFloat(((allStepTotal / allStepsTaken.length)).toFixed(0))
  }

  getAllUsersAverageMinActive(date) {
    let userEntries = this.activityData.filter(user => user.date === date);
    let allMinActive = userEntries.map(min => min.minutesActive);
    let allMinTotal = allMinActive.reduce((minutes, entry) => {
      return minutes += entry;
    }, 0)
    return parseFloat(((allMinTotal / allMinActive.length)).toFixed(0))
  }

  getStepChallengeTotal(userID, date) {
    let startDate = this.activityData.indexOf(this.activityData.find(item => item.userID === userID && item.date === date));
    let userEntries = this.activityData.slice(startDate, (startDate + 7));
    let weeklyStepCounts = userEntries.map(step => step.numSteps);
    let weeklyStepTotal = weeklyStepCounts.reduce((steps, entry) => {
      return steps += entry;
    }, 0);
    return weeklyStepTotal;
  }

  getStepChallengeResults(id, date) {
    let userEntry = this.data.find(entry => entry.id === id);
    let friends = userEntry.friends;
    let userSteps = this.getStepChallengeTotal(id, date);
    let friendsSteps = friends.map(friend => {
      let friendName = this.data.find(entry => entry.id === friend).name;
      let retObj = {};
      retObj['name'] = friendName
      retObj['numSteps'] = this.getStepChallengeTotal(friend, date)
      return retObj
    })
    let ourName = this.data.find(entry => entry.id === id).name
    let userObj = {}
    userObj['name'] = ourName
    userObj['numSteps'] = userSteps
    friendsSteps.push(userObj)
    let sortedSteps = friendsSteps.sort((a, b) => b.numSteps - a.numSteps)
    return sortedSteps.reduce((acc, cur) => {
      let formattedName = ' ' + cur.name + ': ' + cur.numSteps + ' Steps';
      acc.push(formattedName)
      return acc
    },[])
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
