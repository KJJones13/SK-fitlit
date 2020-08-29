const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/userRepository');
const User = require('../src/user');
const ActivityRepository = require('../src/activityRepository');
const activityData = require('../data/activity-sample-data');
const data = require('../data/user-sample-data');

describe.only('Activity Repository', function() {
  let userRepository, activityRepository, user;

  beforeEach(function() {
    userRepository = new UserRepository(data);
    activityRepository = new ActivityRepository(activityData)
    user = new User(data[0])
  });

  it('should be a function', function() {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of ActivityRepository', function() {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  });

  it('should calculate how many miles a user has walked that day', function() {
    expect(activityRepository.calculateMilesWalked(1, '2019/06/15', user)).to.equal(2.91)
  });

  it('should check if the user has reached their step goal', function() {
    expect(activityRepository.checkStepGoal(1, '2019/06/15', user)).to.equal(false)
  });
});
