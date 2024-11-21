import { combineReducers } from '@reduxjs/toolkit'

const appReducer = combineReducers({
	// [appSlice.name]: staffSlice.reducer
})

//FIXME: сделать нормально
const rootReducer = (state, action) => {
	if (action.type === 'RESET') {
		state = undefined
	}
	//@ts-ignore
	return appReducer(state, action)
}

export default rootReducer
