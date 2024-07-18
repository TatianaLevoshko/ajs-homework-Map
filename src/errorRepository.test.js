import ErrorRepository from './errorRepository';

test('translate known error code', () => {
  const repo = new ErrorRepository();
  repo.addError(404, 'Not Found');
  expect(repo.translate(404)).toBe('Not Found');
});

test('translate unknown error code', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(500)).toBe('Unknown error');
});
