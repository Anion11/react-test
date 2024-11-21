import { AxiosResponse } from 'axios'

import { $api, apiDomain } from '@/shared/api'

import { Auth, DataAuth } from '../model/type'

export const auth = async (data: DataAuth): Promise<Auth | void> => {
	const res: AxiosResponse<Auth> = await $api.post(`${apiDomain}/auth`, data)

	return res.data
}
