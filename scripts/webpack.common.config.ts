import path from 'path'
import { Configuration } from 'webpack'
import { svgrLoader } from './loaders'
import { appSrc, appBuild, appEntryFile, appPath } from './environment'

/**
 * 公共配置文件
 */
export default {
    /**
     * 配置入口文件
     */
    entry: path.join(appSrc, appEntryFile),

    /**
     * 输出配置
     */
    output: {
        /**
         * 配置输出路径
         */
        path: appBuild,

        /**
         * 该选项的值是以 runtime(运行时) 或 loader(载入时) 所创建的每个 URL 为前缀。因此，在多数情况下，此选项的值都会以 / 结束
         */
        publicPath: '/'
    },

    resolve: {
        /**
         * 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在
         */
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],

        /**
         * 通过别名来把原导入路径映射成一个新的导入路径
         */
        alias: {
            '@': appSrc,
            '@@': appPath
        }
    },

    /**
     * 模块配置
     */
    module: {
        /**
         * 规则
         */
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            svgrLoader
        ]
    }
} as Configuration
