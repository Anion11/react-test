import { FC, useRef } from 'react'

import { useLogout } from '../model/useLogout'

const Logout: FC = () => {
	const modalRef = useRef(null)
	const logout = useLogout()

	const handleShow = () => {
		// Открытие модального окна через реф
		if (modalRef.current) {
			modalRef.current.showModal()
		}
	}

	const handleClose = () => {
		// Закрытие модального окна через реф
		if (modalRef.current) {
			modalRef.current.close()
		}
	}

	const handleLogout = () => {
		logout()
	}

	return (
		<>
			<button className="btn btn-neutral" onClick={handleShow}>
				Выйти из аккаунта
			</button>
			<dialog id="my_modal_4" className="modal" ref={modalRef}>
				<div className="modal-box w-5/12">
					<h3 className="text-lg font-bold">Подтверждение выхода</h3>
					<p className="py-4">Вы действительно хотите выйти из аккаунта?</p>
					<div className="modal-action">
						{/* Кнопка для подтверждения выхода */}
						<button className="btn btn-error btn-outline" onClick={handleLogout}>
							Выйти
						</button>
						{/* Кнопка для закрытия модального окна */}
						<button className="btn" onClick={handleClose}>
							Отмена
						</button>
					</div>
				</div>
			</dialog>
		</>
	)
}

export default Logout
