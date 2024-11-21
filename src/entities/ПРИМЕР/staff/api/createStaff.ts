import { AxiosResponse } from 'axios'

import { $api, BaseResponse, apiDomain } from '@/shared/api'

import { DataStaffCreate } from '../model/types'

export const createStaff = async (data: DataStaffCreate): Promise<BaseResponse | void> => {
	const response: AxiosResponse = await $api.post(`${apiDomain}/staff/create`, data)

	return response.data
}
