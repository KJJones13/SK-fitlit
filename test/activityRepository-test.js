const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const ActivityRepository = require('../src/activityRepository');
const activityData = require('../data/activity-sample-data');

describe('Activity Repository', function() {
  let user, activityRepository;

  beforeEach(function() {
    user = new User({
      id: 1,
      name: 'Luisa Hane',
      address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      email: 'Diana.Hayes1@hotmail.com',
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
    })

    activityRepository = new ActivityRepository(activityData[0])
  });

  it('should be a function', function() {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of ActivityRepository', function() {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  });

  it('should take info from activityData', function() {
    expect(activityRepository.userID).to.equal(1);
    expect(activityRepository.date).to.equal('2019/06/15');
    expect(activityRepository.numSteps).to.equal(3577);
    expect(activityRepository.minutesActive).to.equal(140);
    expect(activityRepository.flightsOfStairs).to.equal(16);
  });

  it('should calculate how many miles a user has walked that day', function() {
    expect(activityRepository.calculateMilesWalked(user)).to.equal(2.91)
  });

  it('should check if the user has reached their step goal', function() {
    expect(activityRepository.checkStepGoal(user)).to.equal(false)
  });
});
