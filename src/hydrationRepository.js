class HydrationRepository {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces
  }

  sortDates(hydrationData, userID) {
    let userEntries = this.hydrationData.filter(user => this.userID === userID);
    let dateSort = userEntries.sort((a, b) => new Date(a.date) - new Date(b.date))
    return dateSort
  }

  todaysOunces(userID, date) {
      return this.numOunces
  }

  calculateAverageOunces(hydrationData, userID) {
    let userEntries = this.hydrationData.filter(user => this.userID === userID);
    let totalOunces = userEntries.reduce((ounces, ounce) => {
      return ounces += ounce.numOunces;
    }, 0)
    return parseFloat((totalOunces / userEntries.length).toFixed(0));
  }

  specificDayOunces(userID, date) {
    let dayEntry = this.hydrationData.find(entry => entry.userID === userID && entry.date === date);
    console.log(dayEntry.numOunces)
    return dayEntry.numOunces;
  }
}
// find ounces for the startDate
// increment the startDate by one
// find

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
