'use client'
import {useSelector} from 'react-redux'
import {RootState} from './(state)/store'
import TaskCard from './TaskCard'
const TaskList = () => {
	const data = useSelector((state: RootState) => state.task.data)

	return (
		<ul className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
			{data.map((item, index) => (
				<TaskCard data={item} index={index} key={index}/>
			))}
		</ul>
	)
}

export default TaskList
