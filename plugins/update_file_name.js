const fs = require('fs')

// 批量处理文件名字
function updateFileName(path, fileName, suffix) {
    new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if(err) {
                reject(err)
            }
            resolve(files)
        })
    }).then((fileNames) => {
        fileNames.forEach((value, index) => {
            const oldPath = path + "/" + value
            const newPath = path + "/" + fileName + index + "." + suffix

            fs.rename(oldPath, newPath, (err) => {
                if(err) {
                    throw new Error(err)
                }
            })
        })
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    updateFileName
}