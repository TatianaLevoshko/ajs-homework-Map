class Settings {
	constructor() {
    this.defaultSettings = new Map([
		['theme', 'dark'],
		['music', 'trance'],
		['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
	}
  
	setUserSetting(key, value) {
    this.userSettings.set(key, value);
	}
  
	get settings() {
     const combinedSettings = new Map(this.defaultSettings);
     for (const [key, value] of this.userSettings) {
		combinedSettings.set(key, value);
     }
    return combinedSettings;
	}
  }
  
  export default Settings;
  