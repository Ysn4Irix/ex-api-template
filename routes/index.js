const router = require('express').Router()
const { readdirSync, lstatSync } = require('fs')

/**
 * @desc Get rid of extension in file file.js -> file
 * @param {string} filename
 * @returns {string}
 */
const cleanFileName = filename => {
	return filename.split('.').shift()
}

const ROUTER_PATH = `${__dirname}`

//! Function that will read or scan all files that exist in a folder
readdirSync(ROUTER_PATH).filter(fileType => {
	if (lstatSync(`${ROUTER_PATH}/${fileType}`).isDirectory()) {
		//! Dynamically importing & creating routers in subfolders
		readdirSync(`${ROUTER_PATH}/${fileType}`).filter(fileName => {
			const cleanName = cleanFileName(fileName)
			if (cleanName !== 'index') {
				const routerModule = require(`./${fileType}/${cleanName}`)
				router.use(`/${fileType}/${cleanName}`, routerModule.router)
			} else {
				const routerModule = require(`./${fileType}`)
				router.use(`/${fileType}`, routerModule.router)
			}
		})
	} else {
		const cleanName = cleanFileName(fileType)
		if (cleanName !== 'index') {
			//! Dynamically importing & creating routers
			const routerModule = require(`./${cleanName}`)
			router.use(`/${cleanName}`, routerModule.router)
		}
	}
})

module.exports = { router }
