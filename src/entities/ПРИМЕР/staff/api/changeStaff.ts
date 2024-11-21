import { AxiosResponse } from 'axios'

import { $api, BaseResponse, apiDomain } from '@/shared/api'

import { DataStaffChange } from '../model/types'

export const changeStaff = async ({ data, id }: { data: Partial<DataStaffChange>; id: number }): Promise<BaseResponse | void> => {
	const response: AxiosResponse = await $api.post(`${apiDomain}/staff/update/${id}`, data)

	return response.data
}
