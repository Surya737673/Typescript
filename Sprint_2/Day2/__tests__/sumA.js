const sumArg=require('../src/sumArg')

describe('check sum argument',function(){
  test('Both are Positive',function(){
      expect(sumArg([9,3,4,3])).toBe(19)
  })
  test('Both are Negative',function(){
    expect(sumArg([-9,-3,-4,-3])).toBe(-19)
})

test('Both Positive and negative',function(){
  expect(sumArg([-9,-3,4,3])).toBe(-5)
})

test('Empty',function(){
  expect(sumArg([])).toBe(0)
})
test('String',function(){
  expect(sumArg([1,"2"]).message).toBe("Invalid")
})
 


})