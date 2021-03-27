import path from 'path'
import fs from 'fs'

/**
 * root path at Application
 */
export const appDirectory = fs.realpathSync(process.cwd())
export const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath)

export const appPath = resolveApp('.')
export const appSrc = resolveApp('src')
export const appBuild = resolveApp('build')
export const appPublic = resolveApp('public')
export const appEntryFile = 'index.tsx'
export const appEjsFile = 'index.ejs'
export const appBuildFile = 'bundle.js'

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
