const maxProfit = require("./121-best_time");

describe('maxProfit', () => {
   it('should toBeDefined', () => {
      expect(maxProfit).toBeDefined()
   })

   it('should return 0 if their arent enough days to sell', () => {
      expect(maxProfit([1])).toBe(0)
   })
   
   it('should return profit if profit is greater than 0', () => {
      expect(maxProfit([1, 2])).toBe(1)
   })

   it('should return no profit if profit is less than 1', () => {
      expect(maxProfit([2, 1])).toBe(0)
   })

   it('should return highest profit', () => {
      expect(maxProfit([1, 2, 4])).toBe(3)
   })
})
