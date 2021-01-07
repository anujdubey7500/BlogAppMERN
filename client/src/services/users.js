import axios from 'axios'
import setConfig from '../helpers/authConfig'
const baseUrl = '/api/users'

const getUsers = async () => {
	const response = await axios.get(baseUrl, setConfig())
	return response.data
}

const register = async (user) => {
	const response = await axios.post(baseUrl, user, setConfig())
	return response.data
}

const login = async (credentials) => {
	const response = await axios.post(`${baseUrl}/login`, credentials)
	return response.data
}


const revoke = async () => {
	const response = await axios.post(`${baseUrl}/revoke-token`, {}, setConfig())
	return response.data
}



export default {
	getUsers,
	register,
	login,
	revoke,
}