const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/sleepRepository');
const sleepData = require('../data/sleep-sample-data');


describe('Sleep Repository', () => {
  let sleepRepository;

  beforeEach(() => {
    sleepRepository = new SleepRepository(sleepData);
  });

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should only accept date in yyyy/mm/dd format', () => {
    expect(sleepRepository.checkDate('02/12/2020')).to.equal('Invalid date. Date must be in YYYY/MM/DD format.');
  });

  it('should return sorted user data', () => {
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
      "sleepQuality": 12
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

  it('should return user data for a given week', () => {
    expect(sleepRepository.getWeeklyEntries(1, '2019/06/15')).to.deep.equal([{
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
      "sleepQuality": 12
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

  it('should return hours slept for a specific day', () => {
    expect(sleepRepository.getSleepHoursDay(1, '2019/06/15')).to.equal(6.1);
  });

  it('should return sleep quality for a specific day', () => {
    expect(sleepRepository.getSleepQualityDay(1, '2019/06/15')).to.equal(2.2);
  });

  it('should return the average hours slept for a user', () => {
    expect(sleepRepository.getAverageSleepHours(1)).to.equal(6.9);
  });

  it('should return the average sleep quality for a user', () => {
    expect(sleepRepository.getAverageSleepQuality(1)).to.equal(4.4);
  });

  it('should return the average sleep quality for all user', () => {
    expect(sleepRepository.getAllAverageSleepQuality()).to.equal(3.6);
  });

  it('should return the hours slept each day for the week for a user', () => {
    expect(sleepRepository.getWeeklySleepHours(1, '2019/06/15')).to.equal('6.1, 7, 10.8, 5.4, 4.1, 9.6, 5.1');
  });

  it('should return the quality of sleep each day for the week for a user', () => {
    expect(sleepRepository.getWeeklySleepQuality(1, '2019/06/15')).to.equal('2.2, 4.7, 12, 3, 3.6, 2.9, 2.6');
  });

  it('should return the user who slept the most hours', () => {
    expect(sleepRepository.getMostHoursSlept('2019/06/15')).to.deep.equal([1, 2]);
  });

  it('should return users who average a sleep quality greater than 3 over the course of a week', () => {
    expect(sleepRepository.getQualitySleepUsers('2019/06/15')).to.deep.equal(
      ['1']);
  });
});
