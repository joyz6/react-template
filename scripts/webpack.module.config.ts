/**
 * 层叠样式表相关配置
 */
export const cssLoader = ({ styleLoader }: any) => ({
    test: /.(c|le)ss?$/,
    use: [
        styleLoader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    getLocalIdent: (context: any, _: any, localName: string) => {
                        if (
                            context.resourcePath.includes('node_modules') ||
                            context.resourcePath.includes('global.less')
                        ) {
                            return localName
                        }

                        const match = context.resourcePath.match(/src(.*)/)
                        if (match && match[1]) {
                            const _localName = localName.replace(/[A-Z]/, (word: any) => {
                                return `-${word.toLowerCase()}`
                            })

                            return `${_localName
                                .replace(/([A-Z])/g, '-$1')
                                .toLowerCase()}--${require('crypto').randomBytes(3).toString('hex')}`
                        }
                        return localName
                    }
                }
            }
        },
        {
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
        },
        {
            loader: 'less-loader',
            options: {
                lessOptions: {
                    javascriptEnabled: true
                    // modifyVars: {
                    //     '@primary-color': '#8338EC'
                    // }
                }
            }
        }
    ]
})
