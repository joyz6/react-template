import { appAssetIcon } from '../environment'

export default {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    include: appAssetIcon,
    use: [
        'babel-loader',
        {
            loader: '@svgr/webpack',
            options: {
                babel: false,
                icon: true
            }
        }
    ]
}
