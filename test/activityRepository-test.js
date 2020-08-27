const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const ActivityRepository = require('../src/activityRepository');
const activityData = require('../data/activity-sample-data');

describe('Activity Repository', function() {
  let user1, activityRepository;

  beforeEach(function() {
    let user1 = new User({
      id: 1
    });
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
});
