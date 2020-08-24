const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/userRepository');
const Users = require('../data/users');

describe('UserRepository', function() {
  let userRepository;
  beforeEach(function() {
    // user = new User(userData);
    userRepository = new UserRepository();
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

})
