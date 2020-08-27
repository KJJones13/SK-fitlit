class HydrationRepository {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces
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
}


if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
