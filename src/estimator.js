//for the time lapse recorded
const casesByTime = (currentlyInfected, data) => {
  let cases;
  if (data.periodType === 'days') {
    cases = currentlyInfected * 2 ** Math.trunc(data.timeToElapse / 3);
  } else if (data.periodType === 'weeks') {
    const time = data.timeToElapse * 7;
    cases = currentlyInfected * 2 ** Math.trunc(time / 3);
  } else if (data.periodType === 'months') {
    cases = currentlyInfected * 2 ** (data.timeToElapse * 10);
  }
  return Math.trunc(cases);
};

const covid19ImpactEstimator = (data) => {
  const severeImpact = {};
  const impact = {};

  // 10 times reported cases best case
  impact.currentlyInfected = data.reportedCases * 10;
  // 50 times reported cases worst case
  severeImpact.currentlyInfected = data.reportedCases * 50;

  // infections by requested time
  impact.infectionsByRequestedTime = casesByTime(
    impact.currentlyInfected,
    data
  );
  severeImpact.infectionsByRequestedTime = casesByTime(
    severeImpact.currentlyInfected,
    data
  );

  return {
    data,
    impact,
    severImpact
  };
};

export default covid19ImpactEstimator;
