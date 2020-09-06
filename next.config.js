module.exports = {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/admin',
  //       destination: '/admin/index.html',
  //       permanent: true,
  //     },
  //   ];
  // },
};
