import runningSum from '../answer/runningSum-1480'
test('runningSum:[1,2,3,4] can get [1,3,6,10]', () => {
    expect(runningSum([1,2,3,4])).toEqual([1,3,6,10]);
});