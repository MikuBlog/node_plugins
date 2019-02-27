const gm = require('gm')
const fs = require('fs')
const path = require('path')

// 批量修改图片大小
function changeImageSize(path, width = 500, height = 500, quality = 100, isProportion = true) {
	if(!path) {
		console.log("请填写路径")
		return
	}
	new Promise((resolve, reject) => {
		fs.readdir(path, (err, files) => {
			if(err) {
				reject(err)
			}
			resolve(files)
		})
	}).then(fileNames => {
		return new Promise((resolve, reject) => {
			fileNames.forEach(value => {
				gm(`${path}/${value}`)
				.resize(width, height, isProportion ? "" : "!")
				.setFormat('jpg')
				.quality(quality <= 100 ? quality : 100)
				.write(`${path}/${value}`, err => {
					if(err) {
						reject(err)
						return
					}
				})
			})
		})
	}).catch(err => {
		console.log(err)
	})
}

module.exports = {
	changeImageSize
}
