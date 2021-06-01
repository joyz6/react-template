import path from 'path'
import HtmlWebpackPlugin, { Options } from 'html-webpack-plugin'
import { appPublic, appEjsFile } from '../environment'

/**
 * 入口文件模板, 动态引入外部资源
 */
export default (options?: Options) => {
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
