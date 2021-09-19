import path from 'path'
import { Configuration } from 'webpack-dev-server'
import { appPath } from './environment'
import mockerApi from 'mocker-api'
import { findSync, devServerPort } from './environment'

/**
 * webpack-dev-server 服务器配置
 */
export default {
    /**
     * `webpack-dev-middleware` plugin configuration
     */
    devMiddleware: {
        /**
         * 该属性配置是用来在编译的时候再命令行中输出的内容
         */
        stats: 'none'
    },

    /**
     * 端口号
     */
    port: devServerPort,

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
     * 客户端配置
     */
    client: {
        /**
         * 日志级别
         */
        logging: 'info',

        /**
         * Prints compilation progress in percentage in the browser.
         */
        progress: true,

        /**
         * 是/否将编译的错误信息显示在浏览器页面上
         */
        overlay: {
            /**
             * 是/否将编译的错误信息显示在浏览器页面上
             */
            errors: true
        }
    },

    /**
     * 该配置项属性是用来应对返回404页面时定向跳转到特定页面的。一般是应用在 HTML5中History API 的单页应用，
     * 比如在访问路由时候，访问不到该路由的时候，会跳转到index.html页面
     */
    historyApiFallback: true,

    /**
     * 在其他所有中间件之前执行的自定义中间件
     */
    onBeforeSetupMiddleware: (devServer) => {
        const mockFiles = findSync(path.join(appPath, 'mock'))

        if (mockFiles) {
            /**
             * mock
             */
            mockerApi(devServer.app, mockFiles)
        }
    }
} as Configuration
