import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import {
    Configuration as WebpackConfig,
    HotModuleReplacementPlugin
} from 'webpack';
import {
    Configuration as WebpackDevServerConfig
} from 'webpack-dev-server';

type Configuration = WebpackConfig & {
    devSever?: WebpackDevServerConfig
}