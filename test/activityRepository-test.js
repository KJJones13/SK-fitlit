const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const ActivityRepository = require('../src/activityRepository');
const activityData = require('../data/activity-sample-data');
const data = require('../data/user-sample-data');

describe('Activity Repository', () => {
  let activityRepository, user;

  beforeEach(() => {
    activityRepository = new ActivityRepository(activityData, data);
    user = new User(data[0]);
  });

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of ActivityRepository', () => {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  });

  it('should take info from activityData', () => {
    expect(activityRepository.activityData).to.deep.equal(activityData);
  });

  it('should take info from data', () => {
    expect(activityRepository.data).to.deep.equal(data);
  });

  it('should only accept name in text', () => {
    expect(activityRepository.checkName('49%$')).to.equal('Names can only contain alphabet characters. Try again.');
  });

  it('should only accept date in yyyy/mm/dd format', () => {
    expect(activityRepository.checkDate('02/12/2020')).to.equal('Invalid date. Date must be in YYYY/MM/DD format.');
  });

  it('should sort the activityData for a user', () => {
    expect(activityRepository.sortDates(1)).to.deep.equal([{
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "numSteps": 11374,
      "minutesActive": 213,
      "flightsOfStairs": 13
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "numSteps": 14810,
      "minutesActive": 287,
      "flightsOfStairs": 18
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numSteps": 2634,
      "minutesActive": 107,
      "flightsOfStairs": 5
    }]);
  });

  it('should return the activity data for a given user and day', () => {
    expect(activityRepository.getDayEntry(1, '2019/06/15')).to.deep.equal({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    });
  });

  it('should return the activity data for a given user over a week', () => {
    expect(activityRepository.getWeekEntries(1, '2019/06/15')).to.deep.equal([{
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "numSteps": 11374,
      "minutesActive": 213,
      "flightsOfStairs": 13
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "numSteps": 14810,
      "minutesActive": 287,
      "flightsOfStairs": 18
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numSteps": 2634,
      "minutesActive": 107,
      "flightsOfStairs": 5
    }]);
  });

  it('should calculate how many miles a user has walked that day', () => {
    expect(activityRepository.calculateMilesWalked(1, '2019/06/15', user)).to.equal(2.91);
  });

  it('should check if the user has reached their step goal', () => {
    expect(activityRepository.checkStepGoal(1, '2019/06/15', user)).to.equal(false);
  });

  it('should get the minutes active for a user', () => {
    expect(activityRepository.getMinutesActive(1, '2019/06/15')).to.equal(140);
  });

  it('should get the average minutes active for a week for a user', () => {
    expect(activityRepository.getMinutesActiveAverageWeek(1, '2019/06/15')).to.equal(159);
  });

  it('should get the average flights of stairs climbed for a week for a user', () => {
    expect(activityRepository.getFlightsOfStairsAverageWeek(1, '2019/06/15')).to.equal(18);
  });

  it('should get the average num steps for a week for a user', () => {
    expect(activityRepository.getStepCountAverageWeek(1, '2019/06/15')).to.equal(6797);
  });

  it('should get the all time stair record for a user', () => {
    expect(activityRepository.getAllTimeStairRecord(1)).to.equal(33);
  });

  it('should get all the days a user has exceeded their step goal', () => {
    expect(activityRepository.getStepGoalWinDays(1, user)).to.deep.equal(
      [ '2019/06/19',
        '2019/06/20']);
  });

  it('should get average for all users stair climbed on a specific day', () => {
    expect(activityRepository.getAllUserAverageStairs('2019/06/15')).to.equal(16);
  });

  it('should get average steps for all users on a specific day', () => {
    expect(activityRepository.getAllUsersAverageSteps('2019/06/15')).to.equal(3577);
  });

  it('should get average minutes active for all users on a specific day', () => {
    expect(activityRepository.getAllUsersAverageMinActive('2019/06/15')).to.equal(140);
  });

  it('should total the number of steps for a week for each challenge member', () => {
    expect(activityRepository.getStepChallengeTotal(1, '2019/06/15')).to.equal(47577);
    expect(activityRepository.getStepChallengeTotal(2, '2019/06/15')).to.equal(47590);
    expect(activityRepository.getStepChallengeTotal(3, '2019/06/15')).to.equal(47619);
  });

  it('should return an array of step challenge members ranked by most steps', () => {
    expect(activityRepository.getStepChallengeResults(1, '2019/06/15')).to.deep.equal(
      [ ' Herminia Witting: 47619 Steps',
        ' Jarvis Considine: 47590 Steps',
        ' Luisa Hane: 47577 Steps']);
  });
});
