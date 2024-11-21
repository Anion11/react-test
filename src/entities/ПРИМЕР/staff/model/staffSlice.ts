import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { BaseResponse } from '@/shared/api'
import { CreateAsyncThunkOptions } from '@/shared/redux/model'

import { createStaff } from '../api/createStaff'
import { getStaffDetail } from '../api/getStaffDetail'

import { staffSliceInitial } from './initial'
import { DataStaffCreate, DataStaffDetail, IStaffDetail } from './types'

//детальная
export const asyncStaffInfo = createAsyncThunk<IStaffDetail, DataStaffDetail, CreateAsyncThunkOptions>(
	'staff/info',
	async (data, { rejectWithValue }) => {
		try {
			const response = await getStaffDetail(data)
			if (response) {
				return response
			}
		} catch (error) {
			console.info(error)
			return rejectWithValue(null)
		}
	}
)

//создание
export const asyncStaffCreate = createAsyncThunk<BaseResponse, DataStaffCreate, CreateAsyncThunkOptions>(
	'staff/create',
	async (data, { rejectWithValue }) => {
		try {
			const response = await createStaff(data)
			if (response) {
				return response
			}
		} catch (error) {
			console.info(error)
			return rejectWithValue(null)
		}
	}
)

export const staffSlice = createSlice({
	name: 'staff',
	initialState: staffSliceInitial,
	reducers: {
		clearStaffSlice: state => {
			state.staffInfo = staffSliceInitial.staffInfo
		},

		clearStaffInfo: state => {
			state.staffInfo = staffSliceInitial.staffInfo
		}
	},
	extraReducers: builder => {
		builder

			//детальная
			.addCase(asyncStaffInfo.fulfilled, (state, action) => {
				state.staffInfo = action.payload
			})
	}
})

export const { clearStaffSlice, clearStaffInfo } = staffSlice.actions
export default staffSlice.reducer
