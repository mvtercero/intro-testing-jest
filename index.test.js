const fizzbuzz = require('./index.js');


describe('Fizbuzz', ()=> {
  it('returns fizzbuzz when num is 15',()=> {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });

  it('returns fizz when num is 3',()=> {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  it('returns buzz when num is 5',()=> {
    expect(fizzbuzz(5)).toBe("buzz");
  });

  it('returns 1 when input is 1',()=> {
    expect(fizzbuzz(1)).toBe(1);
  });

  it('returns 2 when input is 2',()=> {
    expect(fizzbuzz(2)).toBe(2);
  });


});