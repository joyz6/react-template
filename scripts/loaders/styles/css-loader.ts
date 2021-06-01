export default {
    loader: 'css-loader',
    options: {
        modules: {
            getLocalIdent: (context: any, _: any, localName: string) => {
                if (context.resourcePath.includes('node_modules') || context.resourcePath.includes('global.less')) {
                    return localName
                }

                const match = context.resourcePath.match(/src(.*)/)
                if (match && match[1]) {
                    const _localName = localName.replace(/[A-Z]/, (word: any) => {
                        return `-${word.toLowerCase()}`
                    })

                    return `${_localName.replace(/([A-Z])/g, '-$1').toLowerCase()}--${require('crypto')
                        .randomBytes(3)
                        .toString('hex')}`
                }
                return localName
            }
        }
    }
}
