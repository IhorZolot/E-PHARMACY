//https://e-pharmacy-backend-b23n.onrender.com
import axios from 'axios'

export const API = axios.create({
	baseURL:
		import.meta.env.MODE === 'development'
			? 'http://localhost:3000/api'
			: 'https://e-pharmacy-backend-b23n.onrender.com/api',
})
