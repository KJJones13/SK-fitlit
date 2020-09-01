const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const UserRepository = require('../src/userRepository');
const data = require('../data/user-sample-data');

describe.only('User Repository', () => {
  let user1, userRepository;

  beforeEach(() => {
    let user1 = new User({
      id: 1,
      name: 'Luisa Hane',
      address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      email: 'Diana.Hayes1@hotmail.com',
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [
        16,
        4,
        8
      ]
    });
    userRepository = new UserRepository(data);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should return user data', () => {
    expect(userRepository.getUserData(1)).to.equal(user1);
  })

  it('should calculate the average step goal of users', () => {
    expect(userRepository.calculateAverageStepGoal()).to.equal(6400)
  });

  it('should find a user name', () => {
    // user = new User()
    expect(userRepository.getNameByID(1)).to.equal('Luisa Hane');
  })

})
