module.exports = api => {
  const isTest = api.env('test');

  if (isTest) {
    return {
      presets: ['@babel/preset-env'],
    };
  }

  return {
    plugins: ['@babel/plugin-syntax-dynamic-import'],
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ],
  };
};
