export interface BaseResponse {}

export interface BaseResponseData<T> {
	data: T
}

export interface BaseResponseError {
	error: string
}
