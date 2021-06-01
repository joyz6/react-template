import path from 'path'
import { Configuration } from 'webpack-dev-server'
import { appPath } from './environment'
import mockerApi from 'mocker-api'
import { findSync } from './environment'

/**
 * webpack-dev-server 端口号
 */
export const devServerPort = 3000

/**
 * webpack-dev-server 服务器配置
 */
export default {
    /**
     * 端口号
     */
    port: 3000,

    /**
     * 对所有服务器资源采用gzip进行压缩
     */
    compress: true,

    /**
     * 该配置项是指模块替换换功能，DevServer 默认行为是在发现源代码
     * 被更新后通过自动刷新整个页面来做到实时预览的，但是开启模块热替
     * 换功能后，它是通过在不刷新整个页面的情况下通过使用新模块替换旧
     * 模块来做到实时预览的
     */
    hot: true,

    /**
     * 使用内联自动刷新和模块热替换模式
     */
    inline: true,

    /**
     * 该属性配置是用来在编译的时候再命令行中输出的内容
     */
    stats: 'errors-only',

    /**
     * 该属性是用来在编译出错的时候，在浏览器页面上显示错误。该属性值默认为false，需要的话，设置该参数为true
     */
    overlay: {
        /**
         * 当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
         */
        errors: true
    },

    /**
     * 该配置项属性是用来应对返回404页面时定向跳转到特定页面的。一般是应用在 HTML5中History API 的单页应用，
     * 比如在访问路由时候，访问不到该路由的时候，会跳转到index.html页面
     */
    historyApiFallback: true,

    /**
     * 该配置项指定了服务器资源的根目录，如果不配置 contentBase 的话，那么 contentBase 默认是当前执行的目录,一般是项目的根目录
     */
    contentBase: appPath,

    /**
     * 在其他所有中间件之前执行的自定义中间件
     */
    before: (app) => {
        const mockFiles = findSync(path.join(appPath, 'mock'))

        if (mockFiles) {
            /**
             * mock
             */
            mockerApi(app, mockFiles)
        }
    }
} as Configuration
