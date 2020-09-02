const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const userData = require('../data/user-sample-data');
const UserRepository = require('../src/userRepository');

describe('User', () => {
  let user1;
  beforeEach(() => {
    user1 = new User({
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
    })
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
  });

  it('should take info from userData', () => {
    expect(user1.id).to.equal(1);
    expect(user1.name).to.equal('Luisa Hane')
    expect(user1.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697')
    expect(user1.email).to.equal('Diana.Hayes1@hotmail.com')
    expect(user1.strideLength).to.equal(4.3)
    expect(user1.dailyStepGoal).to.equal(10000)
    expect(user1.friends).to.deep.equal([16, 4, 8])
  });

  it('should only accept name in text', () => {
    expect(user1.checkName('49%$')).to.equal('Names can only contain alphabet characters. Try again.');
  });

  it('should only accept date in yyyy/mm/dd format', () => {
    expect(user1.checkDate('02/12/2020')).to.equal('Invalid date. Date must be in YYYY/MM/DD format.');
  });

  it('should return a users first name only', function() {
    expect(user1.getFirstName()).to.equal('Luisa');
  });

});
