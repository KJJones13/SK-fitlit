class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  sortDates(userID) {
    let userEntries = this.hydrationData.filter(user => user.userID === userID);
    let dateSort = userEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
    return dateSort;
  }

  calculateAverageOunces(userID) {
    let userEntries = this.hydrationData.filter(user => user.userID === userID);
    let totalOunces = userEntries.reduce((ounces, entry) => {
      return ounces += entry.numOunces;
    }, 0)
    return parseFloat((totalOunces / userEntries.length).toFixed(0));
  }

  specificDayOunces(userID, date) {
    let dayEntry = this.hydrationData.find(entry => entry.userID === userID && entry.date === date);
    return dayEntry.numOunces;
  }

  weeklyOunces(userID, date) {
    let sortedEntries = this.sortDates(userID);
    return sortedEntries;
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
