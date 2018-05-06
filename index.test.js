const sum = require('./index.js');


describe ('Sum App',()=> {
  it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(3, 4)).toBe(7);
  });

  it('adds positive and negative numbers',() => {
  expect(sum(5,-3)).toBe(2);
  expect(sum (2,-4)).toBe(-2);
  });

  it('adds decimal numbers',()=> {
  expect(sum(1.2, 2.3)).toBe(3.5);
  expect(sum(0.1,-0.2)).toBe(-0.1);
  });
});