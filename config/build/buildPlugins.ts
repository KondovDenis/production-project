import  path from 'path';
import webpack from 'webpack';
import  HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from '../types/config';
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { DefinePlugin } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'


export function buildPlugins({paths, isDev}:BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
    
        new HtmlWebpackPlugin({
        template: paths.html
    }
    ),

    new MiniCssExtractPlugin({
        filename: 'css/[name].[content:8].css',
        chunkFilename: 'css/[name].[content:8].css',
    
    }),
    
    new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
    }),
    ]

    if (isDev){
        plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(new BundleAnalyzerPlugin({openAnalyzer:false}))
    }
    return plugins 
}