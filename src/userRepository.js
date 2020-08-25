class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    let userMatch = this.data.find(user => id === this.data.id)
    return userMatch;
  }

  calculateAverageStepGoal() {
    const totalStepGoal = this.data.reduce((totalSteps, info) => {
      return totalSteps += info.dailyStepGoal
    }, 0)
    return totalStepGoal / this.data.length; 
  }
}
if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
