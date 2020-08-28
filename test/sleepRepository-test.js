const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const SleepRepository = require('../src/sleepRepository');
const sleepData = require('../data/sleep-sample-data');

describe('Sleep Repository', function() {
  let sleepRepository;

  beforeEach(function() {
    sleepRepository = new SleepRepository(sleepData[0])
  });

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', function() {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should take info from sleepData', function() {
    expect(sleepRepository.userID).to.equal(1);
    expect(sleepRepository.date).to.equal('2019/06/15');
    expect(sleepRepository.hoursSlept).to.equal(6.1);
    expect(sleepRepository.sleepQuality).to.equal(2.2);
  });

  it('should return hours slept for a specific day', function() {
    expect(sleepRepository.getSleepHoursDay(1, '2019/06/15')).to.equal(6.1)
  });

  it('should return sleep quality for a specific day', function() {
    expect(sleepRepository.getSleepQualityDay(1, '2019/06/15')).to.equal(2.2)
  });

  it('should return the average hours slept for a user', function() {
    sleepRepository = new SleepRepository(sleepData)
    expect(sleepRepository.getAverageSleepHours(1)).to.equal(6.9)
  });

  it('should return the average sleep quality for a user', function() {
    sleepRepository = new SleepRepository(sleepData)
    expect(sleepRepository.getAverageSleepQuality(1)).to.equal(3.4)
  });

  it('should return the average sleep quality for a user', function() {
    sleepRepository = new SleepRepository(sleepData)
    expect(sleepRepository.getAllAverageSleepQuality()).to.equal(3.4)
  });
});
