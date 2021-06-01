import FriendlyErrorsWebpackPlugin, { Options as FriendlyErrorsOptions } from 'friendly-errors-webpack-plugin'
import { devServerPort } from '../environment'

/**
 * webpack 友好提示插件
 */
export default (options?: FriendlyErrorsOptions) => {
    return new FriendlyErrorsWebpackPlugin(
        Object.assign(
            {},
            {
                compilationSuccessInfo: {
                    messages: [`Application is running here http://localhost:${devServerPort}`]
                }
            } as FriendlyErrorsOptions,
            options
        )
    )
}
