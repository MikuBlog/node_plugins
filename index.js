const updateFileName = require('./plugins/update_file_name')
const path = require('path')

// 批量修改图片(路径、文件名字、 文件后缀)
updateFileName.updateFileName(path.join(__dirname+"/images"), "", "jpg")
