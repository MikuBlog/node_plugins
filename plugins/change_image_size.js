const gm = require('gm')
const fs = require('fs')
const path = require('path')

function changeImageSize(path, width = 500, height = 500, quality = 100, isProportion = true) {
	if(!path) {
		console.log("请填写路径")
		return
	}
	new Promise((resolve, reject) => {
		fs.readdir(path, (err, files) => {
			if(err) {
				console.log(err)
				return
			}
			resolve(files)
		})
	}).then(fileNames => {
		fileNames.forEach(value => {
			gm(`${path}/${value}`)
			.resize(width, height, isProportion? "" : "!")
			.setFormat('jpg')
			.quality(quality <= 100 ? quality : 100)
			.write(`${path}/${value}`, err => {
				if(err) {
					console.log(err)
					return
				}
			})
		})
	})
}

module.exports = {
	changeImageSize
}