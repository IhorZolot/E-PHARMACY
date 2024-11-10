import { API } from '../../config/adminConfig'

export const fetchStatistics = async () => {
	const { data } = await API.get('/statistics')
	return data
}
