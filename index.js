const updateFileName = require('./plugins/update_file_name')
const changeImageSize = require('./plugins/change_image_size')
const path = require('path')

// 批量修改文件名称(路径、文件名字、 文件后缀)
updateFileName.updateFileName(path.join(__dirname+"/images"), "", "jpg")

// 批量修改文件大小（图片所在文件夹、宽（默认500）、高（默认500）、图片质量（默认100为原质量）、是否按照原比例（默认true））
changeImageSize.changeImageSize(path.join(__dirname + "/images"), 1000, 3000, 33, false)