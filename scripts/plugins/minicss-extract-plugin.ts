import MiniCssExtractPlugin, { PluginOptions } from 'mini-css-extract-plugin'

/**
 *  该插件可以将css样式打包到单独的文件中, 并link至HTML页面中
 */
export default (options: PluginOptions) => {
    return new MiniCssExtractPlugin(options)
}

export { MiniCssExtractPlugin }
