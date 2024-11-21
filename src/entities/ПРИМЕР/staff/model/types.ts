export interface IStaff extends AdditionalStaff {
	id: number
	created_at: Date | null
	updated_at: Date | null
	project_id: number | null
	staff_post_id: number | null
	name: string
	code: string
	image: string | null
	description: string | null
	active: boolean | null
	last_name: string | null
	phone: string | null
	hide_post: boolean | null
	hide_site: boolean | null
}

interface AdditionalStaff {
	initials: string
}

export interface IStaffSlice {
	staffInfo: IStaffDetail | null
}

export interface DataStaffList {
	filter_project_id: number
	filter_search?: string
	filter_active?: boolean
	add_post?: boolean
	add_services?: boolean
}

export interface DataStaffCreate {
	project_id: number
	post_id: number
	name: string
	last_name: string
	description: string
	active: boolean
	phone: string
	hide_post: boolean
	hide_site: boolean
}
export interface DataStaffChange {
	post_id: number
	name: string
	last_name: string
	description: string
	active: boolean
	phone: string
	hide_post: boolean
	hide_site: boolean
	image: File | null
	service_id: number
}

export interface DataStaffDetail {
	add_post?: boolean
	add_services?: boolean
	id: string
}

export interface IStaffDetail extends IStaff {
	serviceIds: number[]
}

export interface DataStaffDelete {
	id: string
}
