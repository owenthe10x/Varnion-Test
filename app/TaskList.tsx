'use client'
import {useSelector} from 'react-redux'
import {RootState} from './(state)/store'
import TaskCard from './TaskCard'
import {useDispatch} from 'react-redux'
import {deleteTask} from './(state)/task/taskSlice'
import useConfirmationModal from './hooks/useConfirmationModal'
import ConfirmationModal from './ConfirmationModal'
const TaskList = () => {
	const data = useSelector((state: RootState) => state.task.data)
	const dispatch = useDispatch()
	const {open} = useConfirmationModal()
	const deleteHandler = async (index: number) => {
		const isConfirmed = await open()
		if (isConfirmed) {
			dispatch(deleteTask(index))
		}
	}
	return (
		<>
			<ul className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
				{data.map((item, index) => (
					<TaskCard
						data={item}
						index={index}
						key={index}
						onDelete={deleteHandler}
					/>
				))}
			</ul>
			<ConfirmationModal />
		</>
	)
}

export default TaskList
