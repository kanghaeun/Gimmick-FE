export const calculateTotalSeconds = detailTimerData => {
  return detailTimerData.reduce(
    (total, step) =>
      total + (parseInt(step.minutes) * 60 + parseInt(step.seconds)),
    0,
  );
};
