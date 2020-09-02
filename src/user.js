class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }

  checkName(name) {
    let letters = /^[A-Za-z]+$/;
    if (!name.match(letters)) {
      return 'Names can only contain alphabet characters. Try again.';
    };
  };

  checkDate(date) {
    if (date.includes('/', 2)) {
      return 'Invalid date. Date must be in YYYY/MM/DD format.'
    }
  }

  getFirstName() {
    let fullName = this.name.split(' ')
    let firstName = fullName[0];
    return firstName;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
