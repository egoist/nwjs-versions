'use strict'

const aimer = require('aimer')
const isSemver = require('is-semver')

module.exports = function () {
	return aimer('http://dl.nwjs.io/')
		.then(function ($) {
			const versions = []
			$('tr').each(function () {
				let v = $(this).find('a').text()
				v = v.substring(1, v.length - 1)
				if (isSemver(v)) {
					versions.push(v)
				}
			})
			return versions
		})
		.catch(function (e) {
			throw e
		})
}
