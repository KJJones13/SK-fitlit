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
    activityRepository = new ActivityRepository(activityData, data)
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

  it('should get the minutes active for a user', function() {
    expect(activityRepository.getMinutesActive(1, '2019/06/15')).to.equal(140)
  });

  it('should get the average minutes active for a week for a user', function() {
    expect(activityRepository.getMinutesActiveAverageWeek(1, '2019/06/15')).to.equal(159)
  });

  it('should get the average flights of stairs climbed for a week for a user', function() {
    expect(activityRepository.getFlightsOfStairsAverageWeek(1, '2019/06/15')).to.equal(18)
  });

  it('should get the average num steps for a week for a user', function() {
    expect(activityRepository.getStepCountAverageWeek(1, '2019/06/15')).to.equal(6797)
  });

  it('should get the all time stair record for a user', function() {
    expect(activityRepository.getAllTimeStairRecord(1)).to.equal(33)
  });

  it('should get all the days a user has exceeded their step goal', function() {
    expect(activityRepository.getStepGoalWinDays(1, user)).to.deep.equal(['2019/06/19', '2019/06/20'])
  });

  it('should get average for all users stair climbed on a specific day', function() {
    expect(activityRepository.getAllUserAverageStairs('2019/06/15')).to.equal(16)
  });

  it('should get average steps for all users on a specific day', function() {
    expect(activityRepository.getAllUsersAverageSteps('2019/06/15')).to.equal(3577)
  });

  it('should get average minutes active for all users on a specific day', function() {
    expect(activityRepository.getAllUsersAverageMinActive('2019/06/15')).to.equal(140)
  });

  it('should total the number of steps for a week for each challenge member', function() {
    expect(activityRepository.getStepChallengeTotal(1, '2019/06/15')).to.equal(47577);
    expect(activityRepository.getStepChallengeTotal(2, '2019/06/15')).to.equal(47590);
    expect(activityRepository.getStepChallengeTotal(3, '2019/06/15')).to.equal(47619)
  });

  it('should return an array of step challenge members ranked by most steps', function() {
    expect(activityRepository.getStepChallengeResults(1, '2019/06/15')).to.deep.equal([' Herminia Witting: 47619 Steps', ' Jarvis Considine: 47590 Steps', ' Luisa Hane: 47577 Steps'])
  });
});
