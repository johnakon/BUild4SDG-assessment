const covid19ImpactEstimator = (data) => {
  var impact = {};
  var severImpact = {};

  var power = 

  //currently affected people
  impact.currentlyInfected = data.reportedCases * 10;
  severImpact.currentlyInfected = data.reportedCases * 50;

  return {
    data,
    impact,
    severImpact
  };
};

export default covid19ImpactEstimator;
