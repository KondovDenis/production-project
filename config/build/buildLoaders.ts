import  webpack from "webpack";
import { BuildOptions } from "../types/config";
import buildCssLoader from "./loaders/buildCssLoader";



export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

   const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
   }

    const cssLoader = buildCssLoader(isDev)

    const typescriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }


    const babelLoader  = {
      test: /\.(js|tsx|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }

    const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }

    return  [
            svgLoader,
            fileLoader,
            babelLoader,
            typescriptLoader,
            cssLoader,
      ]
}