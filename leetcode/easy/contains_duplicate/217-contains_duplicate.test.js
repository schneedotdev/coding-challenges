const containsDuplicate = require("./217-contains_duplicate")

describe('containsDuplicate()', () => {
   it('should be defined', () => {
      expect(containsDuplicate).toBeDefined()
   })

   it('should return false if no duplicates', () => {
      expect(containsDuplicate([1])).toBe(false)
   })

   it('should return true if there are duplicates', () => {
      expect(containsDuplicate([1, 1])).toBe(true)
   })
})