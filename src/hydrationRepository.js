class HydrationRepository {
  constructor(hydrationData) {
    this.userID = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces
  }

  todaysOunces(userID, date) {
      return this.numOunces
  }
}


if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
