class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  };

  checkDate(date) {
    if (date.includes('/', 2)) {
      return 'Invalid date. Date must be in YYYY/MM/DD format.'
    };
  };

  sortDates(userID) {
    let userEntries = this.hydrationData.filter(user => user.userID === userID);
    let dateSort = userEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
    return dateSort;
  };

  calculateAverageOunces(userID) {
    let userEntries = this.hydrationData.filter(user => user.userID === userID);
    let totalOunces = userEntries.reduce((ounces, entry) => {
      return ounces += entry.numOunces;
    }, 0);
    return parseFloat((totalOunces / userEntries.length).toFixed(0));
  };

  specificDayOunces(userID, date) {
    let dayEntry = this.hydrationData.find(entry => entry.userID === userID && entry.date === date);
    return dayEntry.numOunces;
  };

  weeklyOunces(userID, date) {
    let allSortedEntries = this.sortDates(userID);
    let startDate = allSortedEntries.indexOf(allSortedEntries.find(item => item.date === date));
    let weekEntries = allSortedEntries.slice(startDate, (startDate + 7));
    let weekOunces = weekEntries.map(entry => entry.numOunces);
    return weekOunces.join('oz, ');
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
