import path from 'path'
import { DefinePlugin } from 'webpack'
import HtmlWebpackPlugin, { Options } from 'html-webpack-plugin'
import { appPublic, appEjsFile } from './environment'

/**
 * 入口文件模板, 动态引入外部资源
 */
export const htmlWebpackPlugin = (options?: Options) => {
    return new HtmlWebpackPlugin(
        Object.assign(
            {},
            {
                template: path.join(appPublic, appEjsFile),
                inject: true
            },
            options
        )
    )
}

/**
 * 注册全局变量
 *
 * @param {*} environment 环境变量  `development` || `production`
 * @param {*} options
 * @returns
 */
export const webpackDefinePlugin = (
    environment: 'development' | 'production' | 'none',
    options?: Record<string, any>
) => {
    return new DefinePlugin(
        Object.assign(
            {},
            {
                process: {
                    env: {
                        NODE_ENV: JSON.stringify(environment)
                    }
                }
            },
            options
        )
    )
}
