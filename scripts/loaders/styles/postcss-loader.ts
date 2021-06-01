export default {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            ident: 'postcss',
            plugins: [
                require('postcss-preset-env')({ browsers: 'last 2 versions' }),
                require('cssnano')(),
                require('postcss-pxtorem')({
                    rootValue: 16,
                    exclude: /node_modules/
                })
            ]
        }
    }
}
