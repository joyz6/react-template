import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import { appBuildFile } from './environment'
import { styleLoader } from './loaders'
import { htmlWebpackPlugin, webpackDefinePlugin, friendlyErrorsWebpackPlugin } from './plugins'

export default merge(require('./webpack.common.config').default, {
    /**
     * 环境配置
     */
    mode: 'development',

    /**
     * 输出配置
     */
    output: {
        /**
         * 输出的文件名称
         */
        filename: appBuildFile
    },

    /**
     * 生成 sourcemap
     */
    devtool: 'source-map',

    /**
     * 模块配置
     */
    module: {
        rules: [styleLoader('style-loader')]
    },

    /**
     * 插件配置
     */
    plugins: [
        /**
         * 入口文件模板, 动态引入外部资源
         */
        htmlWebpackPlugin(),

        /**
         * 注册全局变量
         */
        webpackDefinePlugin('development'),

        /**
         * 友好错误提示插件
         */
        friendlyErrorsWebpackPlugin()
    ],

    /**
     * 服务器配置
     */
    devServer: require('./webpack.devserver.config').default
} as Configuration)
