import { AxiosResponse } from 'axios'

import { $api, apiDomain } from '@/shared/api'

import { DataStaffDetail, IStaffDetail } from '../model/types'

export const getStaffDetail = async (data: DataStaffDetail): Promise<IStaffDetail | void> => {
	const res: AxiosResponse<IStaffDetail> = await $api.post(`${apiDomain}/staff/info/${data.id}`, data)
	return res.data
}
