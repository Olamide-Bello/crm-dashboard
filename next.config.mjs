/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.preferRelative = true;
      const fileLoaderRule = config.module.rules.find(
        (rule) =>
          rule.test &&
          rule.test instanceof RegExp &&
          rule.test.test('.svg')
      );
  
      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/;
      }
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
};

export default nextConfig;
