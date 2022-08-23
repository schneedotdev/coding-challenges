/**
 * Name: Transportation on vacation
 * Description: Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
 * Link: https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
 */

function rentalCarCost(d) {
    const cost = d * 40
    return d > 6 ? cost - 50 : d > 2 ? cost - 20 : cost
}