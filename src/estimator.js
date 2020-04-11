const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severImpact = {};

  let days;
  const duration = data.timeToElapse;
  if (data.periodType === 'days') {
    days = duration;
  } else if (data.periodType === 'weeks') {
    days = duration * 7;
  }
  if (data.periodType === 'months') {
    days = duration * 30;
  }
  Console.log(days);

  // 10 reported cases
  impact.currentlyInfected = data.reportedCases * 10;
  // 50 reported cases
  severImpact.currentlyInfected = data.reportedCases * 50;

  const value = Math.trunc(days / 3);

  impact.infectionsByRequestedTime = Math.trunc(
    impact.currentlyInfected * 2 ** value
  );
  severImpact.infectionsByRequestedTime = Math.trunc(
    severImpact.currentlyInfected * 2 ** value
  );

  const computations = {
    data,
    impact,
    severImpact
  };

  return computations;
};

export default covid19ImpactEstimator;
