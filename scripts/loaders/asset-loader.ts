import { appAssetIcon } from '../environment'

/**
 * webpack5 Asset module, 用于载入资源文件
 * 其工作方式与`url-loader` 和 `file-loader` 相似，如果文件的体积比 `maxSize` 小返回 base64格式，
 * 否则将返回该文件的url
 */
export default {
    test: /\.(png|jpg|gif|svg)$/i,
    exclude: appAssetIcon,
    type: 'asset',
    parser: {
        dataUrlCondition: {
            maxSize: 8 * 1024 // 单位: kb
        }
    }
}
