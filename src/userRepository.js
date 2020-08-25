class UserRepository {
  constructor(data) {
    // this.users = data.map(function(user) {
    //   return new User(user);
    this.data = data;
  }
  getUserData(id) {
    let userMatch = this.data.find(user => id === this.data.id)
    return userMatch;
  }
}
if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
