module.exports = {
    webpack: (config) => {
      config.resolve.fallback = {
        crypto: false,
      };
      return config;
    },
  };
  