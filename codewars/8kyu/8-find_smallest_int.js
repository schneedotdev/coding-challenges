/**
 * Name: Find the smallest integer in the array
 * Description: Given an array of integers your solution should find the smallest integer. 
 */

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0]
  }
}