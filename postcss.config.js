if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: {
      autoprefixer: {},
      cssnano: {},
      'rucksack-css': {},
    },
  };
} else {
  module.exports = {
    plugins: {
      autoprefixer: {},
      'rucksack-css': {},
    },
  };
}
