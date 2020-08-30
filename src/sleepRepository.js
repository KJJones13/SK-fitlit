class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
    // this.userID = sleepData.userID;
    // this.date = sleepData.date;
    // this.hoursSlept = sleepData.hoursSlept;
    // this.sleepQuality = sleepData.sleepQuality;
  }

  sortDates(userID) {
    let userEntries = this.sleepData.filter(user => user.userID === userID);
    let dateSort = userEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
    return dateSort;
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
    }, 0)
    return parseFloat(((totalSleepHours / userEntries.length)).toFixed(1))
  }

  getAverageSleepQuality(userID) {
    let userEntries = this.sleepData.filter(user => user.userID === userID);
    let totalSleepQuality = userEntries.reduce((quality, user) => {
      return quality += user.sleepQuality
    }, 0)
    return parseFloat(((totalSleepQuality / userEntries.length)).toFixed(1))
  }

  getAllAverageSleepQuality() {
    let totalSleepQuality = this.sleepData.reduce((quality, user) => {
      return quality += user.sleepQuality
    }, 0)
    return parseFloat(((totalSleepQuality / this.sleepData.length)).toFixed(1))
  }

  getWeeklySleepHours(userID, date) {
    let allSortedEntries = this.sortDates(userID);
    let startDate = allSortedEntries.indexOf(allSortedEntries.find(item => item.date === date));
    let weekEntries = allSortedEntries.slice(startDate, (startDate + 7));
    let weeklySleepHours = weekEntries.map(entry => entry.hoursSlept)
    return weeklySleepHours;
  }

  getWeeklySleepQuality(userID, date) {
    let allSortedEntries = this.sortDates(userID);
    let startDate = allSortedEntries.indexOf(allSortedEntries.find(item => item.date === date));
    let weekEntries = allSortedEntries.slice(startDate, (startDate + 7));
    let weeklySleepQuality = weekEntries.map(entry => entry.sleepQuality)
    return weeklySleepQuality;
  }

  getMostHoursSlept(date) {
    let dateEntries = this.sleepData.filter(entry => entry.date === date);
    let sleepHours = dateEntries.sort((a, b) => b.hoursSlept - a.hoursSlept);
    let mostHoursSlept = sleepHours.filter(entry => entry.hoursSlept === sleepHours[0].hoursSlept)
    let userMostSleep = mostHoursSlept.map(entry => entry.userID);
    return userMostSleep
  }

  getQualitySleepUsers(date) {
    let allUserIDs = this.sleepData.map(entry => entry.userID);
    let uniqueUserIDs = allUserIDs.filter((id, index, arr) => arr.indexOf(id) === index);
    let userWeeklyQuality = uniqueUserIDs.map(id => {
      let retObj = {}
      retObj[id] = this.getWeeklySleepQuality(id, date)
      return retObj
    })
    let weeklyAverageQuality = userWeeklyQuality.map(entry => {
      let retObj = {}
      let entryKey = Object.keys(entry)[0]
      retObj[entryKey] = entry[entryKey].reduce((acc, cur) => {
        return acc += cur
      })
      if(retObj[entryKey] / 7 > 3) {
        return entryKey
      }
    }, 0)
    let goodSleepers = weeklyAverageQuality.filter(function(id) {
      return id != null
    })
    return goodSleepers
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
