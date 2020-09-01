const chai = require('chai');
const expect = chai.expect;
const data = require('../data/user-sample-data');
const UserRepository = require('../src/userRepository');
const SleepRepository = require('../src/sleepRepository');
const sleepData = require('../data/sleep-sample-data');


describe.only('Sleep Repository', function() {
  let sleepRepository, userRepository;

  beforeEach(function() {
    userRepository = new UserRepository(data);
    sleepRepository = new SleepRepository(sleepData);
  });

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', function() {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should return sorted user data', function() {
    expect(sleepRepository.sortDates(1)).to.deep.equal([{
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 10.8,
      "sleepQuality": 4.7
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 5.4,
      "sleepQuality": 3
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 4.1,
      "sleepQuality": 3.6
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 9.6,
      "sleepQuality": 2.9
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 5.1,
      "sleepQuality": 2.6
    }]);
  });

  it('should return user data for a given week', function() {
    expect(sleepRepository.getWeeklyEntries(1,'2019/06/15')).to.deep.equal([{
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 10.8,
      "sleepQuality": 4.7
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 5.4,
      "sleepQuality": 3
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 4.1,
      "sleepQuality": 3.6
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 9.6,
      "sleepQuality": 2.9
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 5.1,
      "sleepQuality": 2.6
    }]);
  });

  it('should return hours slept for a specific day', function() {
    expect(sleepRepository.getSleepHoursDay(1, '2019/06/15')).to.equal(6.1);
  });

  it('should return sleep quality for a specific day', function() {
    expect(sleepRepository.getSleepQualityDay(1, '2019/06/15')).to.equal(2.2);
  });

  it('should return the average hours slept for a user', function() {
    expect(sleepRepository.getAverageSleepHours(1)).to.equal(6.9);
  });

  it('should return the average sleep quality for a user', function() {
    expect(sleepRepository.getAverageSleepQuality(1)).to.equal(3.4);
  });

  it('should return the average sleep quality for all user', function() {
    expect(sleepRepository.getAllAverageSleepQuality()).to.equal(3.3);
  });

  it('should return the hours slept each day for the week for a user', function() {
    expect(sleepRepository.getWeeklySleepHours(1, '2019/06/15')).to.equal('6.1, 7, 10.8, 5.4, 4.1, 9.6, 5.1');
  });

  it('should return the quality of sleep each day for the week for a user', function() {
    expect(sleepRepository.getWeeklySleepQuality(1, '2019/06/15')).to.equal('2.2, 4.7, 4.7, 3, 3.6, 2.9, 2.6');
  });

  it('should return the user who slept the most hours', function() {
    expect(sleepRepository.getMostHoursSlept('2019/06/15')).to.deep.equal([1, 2]);
  });

  it('should return users who average a sleep quality greater than 3 over the course of a week', function() {
    expect(sleepRepository.getQualitySleepUsers('2019/06/15')).to.deep.equal(['1','2','3']);
  });
});
