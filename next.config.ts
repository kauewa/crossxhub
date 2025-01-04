import { NextConfig } from 'next';
import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    domains: ['www.datocms-assets.com']
  },
  webpack: (config: Configuration) => {
    if (config.module) {
      if (config.module.rules) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
      } else {
        config.module.rules = [
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ];
      }
    }
    return config;
  },
};

export default nextConfig;
