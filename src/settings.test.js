import Settings from './settings';

test('default settings', () => {
  const settings = new Settings();
  expect(settings.settings.get('theme')).toBe('dark');
  expect(settings.settings.get('music')).toBe('trance');
  expect(settings.settings.get('difficulty')).toBe('easy');
});

test('user settings override default settings', () => {
  const settings = new Settings();
  settings.setUserSetting('theme', 'light');
  expect(settings.settings.get('theme')).toBe('light');
  expect(settings.settings.get('music')).toBe('trance');
});
