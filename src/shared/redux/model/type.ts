import { AppDispatch, RootState } from '@/app/providers/redux/store'

export interface CreateAsyncThunkOptions {
	state: RootState
	rejectValue: Error | null
	dispatch: AppDispatch
}
