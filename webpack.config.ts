import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: { output: { path: string; filename: string }; devServer: { compress: boolean; port: number; contentBase: string }; entry: string; resolve: { extensions: string[] }; plugins: any[]; module: { rules: ({ test: RegExp; use: { loader: string }; exclude: RegExp } | { test: RegExp; use: string[] })[] } } = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
};

export default config;

