class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    let userMatch = this.data.find(item => id === this.data.id)
    return userMatch;
  }

  calculateAverageStepGoal() {
    const totalStepGoal = this.data.reduce((totalSteps, info) => {
      return totalSteps += info.dailyStepGoal
    }, 0)
    return totalStepGoal / this.data.length;
  }

  getNameByID(id) {
    const match = this.data.find(name => name.id === id);
    return match.name;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
