const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const HydrationRepository = require('../src/hydrationRepository');
const hydrationData = require('../data/hydration-sample-data');

describe('Hydration Repository', () => {
  let hydrationRepository;

  beforeEach(() => {
    hydrationRepository = new HydrationRepository(hydrationData);
  });

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

  it('should take info from hydrationData', () => {
    expect(hydrationRepository.hydrationData).to.deep.equal(hydrationData);
  });

  it('should sort the hydrationData for a user', () => {
    expect(hydrationRepository.sortDates(1)).to.deep.equal(hydrationData);
  });

  it('should calculate the average numOunces', () => {
    expect(hydrationRepository.calculateAverageOunces(1)).to.equal(65);
  });

  it('should return numOunces for a specific day', () => {
    expect(hydrationRepository.specificDayOunces(1, "2019/06/19")).to.equal(91);
  });

  it('should return weekly ounces', () => {
    expect(hydrationRepository.weeklyOunces(1, "2019/06/15")).to.equal('37oz, 69oz, 96oz, 61oz, 91oz, 50oz, 50');
  });
})
