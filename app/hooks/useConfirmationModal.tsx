import {useDispatch, useSelector} from 'react-redux'
import {confirmationModalActions} from '../(state)/confirmation-modal/confirmationModalSlice'
import confirmationModalThunkActions from '../(state)/confirmation-modal/confirmationModalThunkActions'
import {AppDispatch} from '../(state)/store'
import {RootState} from '../(state)/store'
import open from '../(state)/confirmation-modal/confirmationModalSlice'
function useConfirmationModal() {
	const dispatch: AppDispatch = useDispatch()
	const {isOpened} = useSelector((state: RootState) => ({
		isOpened: state.confirmationModal.isOpened,
	}))

	const open = async () => {
		const {payload} = await dispatch(confirmationModalThunkActions.open())
		return payload
	}

	const confirm = () => {
		return dispatch(confirmationModalActions.confirm())
	}

	const decline = () => {
		return dispatch(confirmationModalActions.decline())
	}

	return {
		isOpened,
		open,
		confirm,
		decline,
	}
}

export default useConfirmationModal
