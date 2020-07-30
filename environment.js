import Constants from "expo-constants";

const ENV = {
  dev: {
    api: {
      baseURL: 'https://api.github.com',
    },
    login: {
      user: 'github',
    },
  },
  prod: {
    api: {
      baseURL: 'https://api.github.com',
    },
    loginPage: {
      user: '',
    },
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else if (!!ENV[env]) {
    return ENV[env];
  } else {
    return ENV.prod;
  }
};

export default getEnvVars;
