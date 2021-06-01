import path from 'path'
import fs from 'fs'

/**
 * root path at Application
 */
export const appDirectory = fs.realpathSync(process.cwd())
export const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath)

/**
 * 项目根目录
 */
export const appPath = resolveApp('.')

/**
 * 项目源文件目录
 */
export const appSrc = resolveApp('src')

/**
 * 生产环境下文件编译目录
 */
export const appBuild = resolveApp('build')

/**
 * 公共文件目录
 */
export const appPublic = resolveApp('public')

/**
 * 资源目录
 */
export const appAsset = path.join(appSrc, 'assets')

/**
 * Svg图标目录
 * 该目录下的svg文件只会以 react component形式被引入
 */
export const appAssetIcon = path.join(appAsset, 'icons')
export const appEntryFile = 'index.tsx'
export const appEjsFile = 'index.ejs'
export const appBuildFile = 'bundle.js'

/**
 * webpack-dev-server 服务器端口号
 */
export const devServerPort = 3000

/**
 * 查找文件
 */
export const findSync = (startPath: string): Array<any> => {
    let result: Array<string> = []

    if (!fs.existsSync(startPath)) return result

    const files = fs.readdirSync(startPath)
    files.forEach((val) => {
        let file = path.join(startPath, val)
        let stats = fs.statSync(file)

        if (stats.isDirectory()) {
            result.push(...findSync(file))
        } else if (stats.isFile()) {
            result.push(file)
        }
    })

    return result
}
