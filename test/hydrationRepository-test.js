const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const HydrationRepository = require('../src/hydrationRepository');
const hydrationData = require('../data/hydration-sample-data');

describe('Hydration Repository', function() {
  let user1, hydrationRepository;

  beforeEach(function() {
    let user1 = new User({
      id: 1
    });
    hydrationRepository = new HydrationRepository(hydrationData[0])
  });

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', function() {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

  it('should take info from hydrationData', function() {
    expect(hydrationRepository.userID).to.equal(1);
    expect(hydrationRepository.date).to.equal('2019/06/15');
    expect(hydrationRepository.numOunces).to.equal(37);
  });

  it('should return the numOunces for the day', function() {
    expect(hydrationRepository.todaysOunces()).to.equal(37);
  });

  it('should calculate the average numOunces', function() {
    hydrationRepository = new HydrationRepository(hydrationData)
    expect(hydrationRepository.calculateAverageOunces()).to.equal(65)
  });

  it('should sort the hydrationData for a user', function() {
    hydrationRepository = new HydrationRepository(hydrationData)
    expect(hydrationRepository.sortDates()).to.deep.equal(hydrationData);
  });

});
