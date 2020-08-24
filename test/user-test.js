const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const userData = require('../data/users');
const UserRepository = require('../src/userRepository');

describe('User', function() {
  let user;
  beforeEach(function() {
    user = new User(userData[0]);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  })
});
