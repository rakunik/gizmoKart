import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Jacob',
		email: 'jacob@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Jasmine',
		email: 'jasmine@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
]

export default users
