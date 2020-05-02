import isFinite from '../src/helpers/isFinite';
import isFloat from '../src/helpers/isFloat';
import isSafeNumber from '../src/helpers/isSafeNumber';
import getDecimals from '../src/helpers/getDecimals';
import padNumber from '../src/helpers/padNumber';

test('Is a finite number', () => {
  const finite = isFinite(10);
  expect(finite).toBe(true);
});

test('Is not a finite number', () => {
  const finite = isFinite(Infinity);
  expect(finite).toBe(false);
});

test('Is a float', () => {
  const float = isFloat(430.2);
  expect(float).toBe(true);
});

test('Is not a float', () => {
  const float = isFloat(430);
  expect(float).toBe(false);
});

test('Is a safe number', () => {
  const safe = isSafeNumber(2000000);
  expect(safe).toBe(true);
});

test('Is not a safe number', () => {
  const safe = isFloat(9007199254740992);
  expect(safe).toBe(false);
});

test('Get decimals w/ 1', () => {
  const decimals = getDecimals(200.4);
  expect(decimals).toBe('4');
});

test('Get decimals w/ 2', () => {
  const decimals = getDecimals(200.45);
  expect(decimals).toBe('45');
});

test('Get decimals w/ 3', () => {
  const decimals = getDecimals(200.456);
  expect(decimals).toBe('456');
});

test('Pad number w/ 1', () => {
  const padded = padNumber(5);
  expect(padded).toBe('50');
});

test('Pad number w/ 2', () => {
  const padded = padNumber(60);
  expect(padded).toBe('60');
});

test('Pad number w/ 3', () => {
  const padded = padNumber(700);
  expect(padded).toBe('70');
});
