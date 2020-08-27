const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const HydrationRepository = require('../src/hydrationRepository');
const hydrationData = require('../data/hydration-sample-data');

describe('Hydration Repository', function() {
  let hydrationRepository;

  beforeEach(function() {
    hydrationRepository = new HydrationRepository(hydrationData)
  });

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', function() {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

  it('should take info from hydrationData', function() {
    expect(hydrationRepository.hydrationData).to.deep.equal(hydrationData);
  });

  it('should calculate the average numOunces', function() {
    expect(hydrationRepository.calculateAverageOunces(1)).to.equal(65);
  });

  it('should return numOunces for a specific day', function() {
    expect(hydrationRepository.specificDayOunces(1, "2019/06/19")).to.equal(91);
  });

  it('should sort the hydrationData for a user', function() {
    expect(hydrationRepository.sortDates(1)).to.deep.equal(hydrationData);
  });

  it('should return weekly ounces', function() {
    expect(hydrationRepository.weeklyOunces(1, "2019/06/15")).to.deep.equal([37, 69, 96, 61, 91, 50, 50]);
  });
});
