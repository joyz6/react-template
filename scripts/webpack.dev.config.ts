import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import { appBuildFile } from './environment'
import { cssLoader } from './webpack.module.config'
import { htmlWebpackPlugin, webpackDefinePlugin } from './webpack.plugins.config'

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
        rules: [cssLoader({ styleLoader: 'style-loader' })]
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
        webpackDefinePlugin('development')
    ],

    /**
     * 服务器配置
     */
    devServer: require('./webpack.devserver.config').default
} as Configuration)
