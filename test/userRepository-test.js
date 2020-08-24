const chai = require('chai');
const expect = chai.expect
const userRespository = require('../src/userRespository');
const users = require('../data/users');

describe('userRespository', function() {
  let userRespository;
  beforeEach(function() {
    user = new User(usersData[0]);
    userRespository = new UserRepository(data);
  });

  it('should be a function', function() {
    expect(UserRespository).to.be.a('function');
  });

  
})
