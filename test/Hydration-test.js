const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const Hydration = require('../src/hydration');
const hydrationData = require('../data/hydration-sample-data');

describe('Hydration', () => {
  let hydration;

  beforeEach(() => {
    hydration = new Hydration(hydrationData[0])
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should take info from hydrationData', () => {
    hydration = new Hydration(hydrationData)
    expect(hydration.hydrationData).to.deep.equal(hydrationData);
  });

  it('should take info from hydrationData', () => {
    expect(hydration.userID).to.equal(1);
    expect(hydration.date).to.equal('2019/06/15')
    expect(hydration.numOunces).to.equal(37)
  });
});
