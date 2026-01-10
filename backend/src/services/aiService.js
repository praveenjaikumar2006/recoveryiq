export function predictCase(caseData) {
  const priority = Math.min(
    100,
    Math.floor(caseData.outstandingAmount / 1000 + caseData.debtAge)
  );

  return {
    priorityScore: priority,
    recoveryProbability: priority > 70 ? 0.8 : priority > 40 ? 0.5 : 0.3
  };
}
