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
    hydrationRepository = new HydrationRepository({userID: 1, date: '2019/06/15', numOunces: 37})
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
    expect(hydrationRepository.todaysOunces(1, '2019/06/15')).to.equal(37);
  });
});
