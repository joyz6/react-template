import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import { styleLoader } from './loaders'
import { htmlWebpackPlugin, webpackDefinePlugin, minicssExtractPlugin, MiniCssExtractPlugin } from './plugins'

export default merge(require('./webpack.common.config').default, {
    /**
     * 环境配置
     */
    mode: 'production',

    /**
     * 输出配置
     */
    output: {
        /**
         * 输出的文件名称
         */
        filename: 'app-[contenthash:8].js',

        /**
         * 清理文件夹
         */
        clean: true
    },

    /**
     * 模块配置
     */
    module: {
        rules: [styleLoader(MiniCssExtractPlugin.loader)]
    },

    /**
     * 插件配置
     */
    plugins: [
        /**
         * 入口文件模板, 动态引入外部资源
         */
        htmlWebpackPlugin({
            minify: {
                removeComments: true,
                removeRedundantAttributes: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true
            }
        }),

        /**
         * 注册全局变量
         */
        webpackDefinePlugin('production'),

        /**
         * CSS 分离
         */
        minicssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
} as Configuration)
