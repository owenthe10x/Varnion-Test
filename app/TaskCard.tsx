import Image from 'next/image'
import Close from '../public/Close.svg'
import {useDispatch} from 'react-redux'
import {deleteTask} from './(state)/task/taskSlice'
interface TaskCardProps {
	title: string
	body: string
}
const TaskCard = ({data, index}: {data: TaskCardProps; index: number}) => {
	const {title, body} = data
	const dispatch = useDispatch()

	return (
		<div className="flex  items-start justify-between bg-secondary p-3 pb-2 md:pb-1 border-2 border-tertiary rounded-md min-h-16">
			<section>
				<h1 className=" font-medium text-2xl">{title}</h1>
				<p className="text-sm  text-ellipsis">{body}</p>
			</section>
			<button
				className="bg-bgcolor border-2 border-tertiary rounded-md  aspect-square flex justify-center items-center p-2"
				onClick={() => dispatch(deleteTask(index))}
			>
				<Image src={Close} alt="" className="w-3" />
			</button>
		</div>
	)
}

export default TaskCard
