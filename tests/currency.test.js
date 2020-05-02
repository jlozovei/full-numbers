import fullNumbers from '../index';

test('Write a singular value', () => {
  const value = fullNumbers({
    value: 1,
    currency: {
      name: {
        plural: 'dollars',
        singular: 'dollar'
      },
      decimals: {
        plural: 'cents',
        singular: 'cent'
      }
    }
  });

  expect(value).toBe('one dollar');
});

test('Write a singular value with decimals', () => {
  const value = fullNumbers({
    value: 1.99,
    currency: {
      name: {
        plural: 'dollars',
        singular: 'dollar'
      },
      decimals: {
        plural: 'cents',
        singular: 'cent'
      }
    }
  });

  expect(value).toBe('one dollar with ninety-nine cents');
});

test('Write a plural value', () => {
  const value = fullNumbers({
    value: 5,
    currency: {
      name: {
        plural: 'dollars',
        singular: 'dollar'
      },
      decimals: {
        plural: 'cents',
        singular: 'cent'
      }
    }
  });

  expect(value).toBe('five dollars');
});

test('Write a plural value with decimals', () => {
  const value = fullNumbers({
    value: 12.5,
    currency: {
      name: {
        plural: 'dollars',
        singular: 'dollar'
      },
      decimals: {
        plural: 'cents',
        singular: 'cent'
      }
    }
  });

  expect(value).toBe('twelve dollars with fifty cents');
});
