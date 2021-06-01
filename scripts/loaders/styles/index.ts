import cssLoader from './css-loader'
import postcssLoader from './postcss-loader'
import lessLoader from './less-loader'

/**
 * 层叠样式
 * @returns
 */
export default (loader: any) => ({
    test: /.(c|le)ss?$/,
    use: [loader, cssLoader, postcssLoader, lessLoader]
})
