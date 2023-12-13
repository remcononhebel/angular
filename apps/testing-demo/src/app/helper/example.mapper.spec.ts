import { ExampleMapper } from './example.mapper';

describe('ExampleMapper', () => {
  describe('The hard way', () => {
    it('should show 1 and "apple" in the label', () => {
      expect(ExampleMapper.map({ amount: 1, title: 'apple' })).toEqual({
        label: '1 * apple',
      });
    });

    it('should show 2 and "pear" in the label', () => {
      expect(ExampleMapper.map({ amount: 2, title: 'pear' })).toEqual({
        label: '2 * pear',
      });
    });

    it('should show 3 and "banana" in the label', () => {
      expect(ExampleMapper.map({ amount: 3, title: 'banana' })).toEqual({
        label: '3 * banana',
      });
    });
  });

  // describe('The easier way', () => {
  //   const testCases = [
  //     {
  //       example: { amount: 1, title: 'apple' },
  //       expected: { label: '1 * apple' },
  //     },
  //     {
  //       example: { amount: 2, title: 'pear' },
  //       expected: { label: '2 * pear' },
  //     },
  //     {
  //       example: { amount: 3, title: 'banana' },
  //       expected: { label: '3 * banana' },
  //     },
  //   ];

  //   testCases.forEach(({ example, expected }) => {
  //     it(`should return a result with ${example.amount} and ${example.title} in the label`, () => {
  //       const result = ExampleMapper.map(example);
  //       expect(result).toEqual(expected);
  //     });
  //   });
  // });

  describe('The way of snapshots', () => {
    const testCases = [
      {
        example: { amount: 1, title: 'apple' },
      },
      {
        example: { amount: 2, title: 'pear' },
      },
      {
        example: { amount: 3, title: 'banana' },
      },
    ];

    testCases.forEach(({ example }) => {
      it(`should return a result with ${example.amount} and ${example.title} in the label`, () => {
        const result = ExampleMapper.map(example);
        expect(result).toMatchSnapshot();
      });
    });
  });
});
