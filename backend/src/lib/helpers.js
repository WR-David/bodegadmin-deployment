const bcrypt = require('bcryptjs')
const helpers = {}

helpers.encryptPassword = async (pass) => {
	const salt = await bcrypt.genSalt(10)
	return await bcrypt.hash(pass, salt)
}

helpers.matchPassword = async (pass, passDB) => {
	return await bcrypt.compare(pass, passDB)
}

module.exports = helpers