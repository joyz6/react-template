import { DefinePlugin } from 'webpack'

/**
 * 注册全局变量
 *
 * @param {*} environment 环境变量  `development` || `production`
 * @param {*} options
 * @returns
 */
export default (environment: 'development' | 'production' | 'none', options?: Record<string, any>) => {
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
