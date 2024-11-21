import { AxiosResponse } from 'axios'

import { $api, BaseResponse, apiDomain } from '@/shared/api'

import { DataStaffDelete } from '../model/types'

export const deleteStaff = async (data: DataStaffDelete): Promise<BaseResponse | void> => {
	const response: AxiosResponse = await $api.post(`${apiDomain}/staff/delete/${data.id}`)

	return response.data
}
