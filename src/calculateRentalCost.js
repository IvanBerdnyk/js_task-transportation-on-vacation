/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const weeklyDiscount = 50;
  const weekendDiscount = 20;

  let totalCost = days * dailyCost;

  if (days >= 3 && days < 7) {
    totalCost -= weekendDiscount;
  } else if (days >= 7) {
    totalCost -= weeklyDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
