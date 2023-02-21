const isAnagram = require('./242-valid_anagram.js')

describe('isAnagram()', () => {
   it('should be defined', () => {
      expect(isAnagram).toBeDefined
   })

   it('should return false if a string contains a char not in the other', () => {
      expect(isAnagram('a', 'b')).toBe(false)
   })

   it('should return false if arguments are different lengths', () => {
      expect(isAnagram('a', 'aa')).toBe(false)
   })

   it('should return true if occurences are identical but chars arent in the same order', () => {
      expect(isAnagram('aba', 'baa')).toBe(true)
   })
})