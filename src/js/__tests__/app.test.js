/* eslint-disable no-undef */
import hp from '../app';

test('health check undefined', () => {
  let user;
  const result = hp(user);
  expect(result).toBe(undefined);
});

test('health check > 50 === healthy', () => {
  const user = {
    name: 'Маг',
    health: 90,
  };
  const result = hp(user);
  expect(result).toBe('healthy');
});

test('health check <=50 && >=15', () => {
  const user = {
    name: 'Маг',
    health: 35,
  };
  const result = hp(user);
  expect(result).toBe('wounded');
});

test('health check < 15', () => {
  const user = {
    name: 'Маг',
    health: 14,
  };
  const result = hp(user);
  expect(result).toBe('critical');
});
