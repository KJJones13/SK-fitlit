class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  checkDate(date) {
    if (date.includes('/', 2)) {
      return 'Invalid date. Date must be in YYYY/MM/DD format.'
    }
  }

  sortDates(userID) {
    let userEntries = this.sleepData.filter(user => user.userID === userID);
    let dateSort = userEntries.sort((a, b) => {
      new Date(a.date) - new Date(b.date)
    });
    return dateSort;
  }

  getWeeklyEntries(userID, date) {
    let allSortedEntries = this.sortDates(userID);
    let startDate = allSortedEntries.indexOf(allSortedEntries.find(item => item.date === date));
    let weekEntries = allSortedEntries.slice(startDate, (startDate + 7));
    return weekEntries;
  }

  getSleepHoursDay(userID, date) {
    let sleepHours = this.sleepData.find(entry => entry.userID === userID && entry.date === date);
    return sleepHours.hoursSlept;
  }

  getSleepQualityDay(userID, date) {
    let sleepQuality = this.sleepData.find(entry => entry.userID === userID && entry.date === date);
    return sleepQuality.sleepQuality;
  }

  getAverageSleepHours(userID) {
    let userEntries = this.sleepData.filter(user => user.userID === userID);
    let totalSleepHours = userEntries.reduce((hours, user) => {
      return hours += user.hoursSlept
    }, 0);
    return parseFloat(((totalSleepHours / userEntries.length)).toFixed(1));
  }

  getAverageSleepQuality(userID) {
    let userEntries = this.sleepData.filter(user => user.userID === userID);
    let totalSleepQuality = userEntries.reduce((quality, user) => {
      return quality += user.sleepQuality
    }, 0);
    return parseFloat(((totalSleepQuality / userEntries.length)).toFixed(1));
  }

  getAllAverageSleepQuality() {
    let totalSleepQuality = this.sleepData.reduce((quality, user) => {
      return quality += user.sleepQuality
    }, 0);
    return parseFloat(((totalSleepQuality / this.sleepData.length)).toFixed(1));
  }

  getWeeklySleepHours(userID, date) {
    let weekEntries = this.getWeeklyEntries(userID, date);
    let weeklySleepHours = weekEntries.map(entry => entry.hoursSlept);
    return weeklySleepHours.join(', ');
  }

  getWeeklySleepQuality(userID, date) {
    let weekEntries = this.getWeeklyEntries(userID, date);
    let weeklySleepQuality = weekEntries.map(entry => entry.sleepQuality);
    return weeklySleepQuality.join(', ');
  }

  getMostHoursSlept(date) {
    let dateEntries = this.sleepData.filter(entry => entry.date === date);
    let sleepHours = dateEntries.sort((a, b) => b.hoursSlept - a.hoursSlept);
    let mostHoursSlept = sleepHours.filter(entry => entry.hoursSlept === sleepHours[0].hoursSlept);
    let userMostSleep = mostHoursSlept.map(entry => entry.userID);
    return userMostSleep;
  }

  getQualitySleepUsers(date) {
    let allUserIDs = this.sleepData.map(entry => entry.userID);
    let uniqueUserIDs = allUserIDs.filter((id, index, arr) => arr.indexOf(id) === index);
    let userWeeklyQuality = uniqueUserIDs.map(id => {
      let retObj = {}
      retObj[id] = this.getWeeklySleepQuality(id, date).split(', ')
      return retObj
    })
    let weeklyAverageQuality = userWeeklyQuality.map(entry => {
      let retObj = {}
      let entryKey = Object.keys(entry)[0]
      retObj[entryKey] = entry[entryKey].reduce((acc, cur) => {
        return acc += parseInt(cur)
      }, 0)
      if(retObj[entryKey] / 7 > 3) {
        return entryKey
      }
    })
    let goodSleepers = weeklyAverageQuality.filter(function(id) {
      return id != null
    })
    return goodSleepers
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
