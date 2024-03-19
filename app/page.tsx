import InputForm from './InputForm'
import TaskCard from './TaskCard'
import TaskList from './TaskList'
const Page = () => {
	return (
		<main className="bg-bgcolor w-screen h-screen px-5 py-10 lg:px-24 space-y-5 lg:space-y-10 text-textColor">
			<InputForm />
			<TaskList />
		</main>
	)
}

export default Page
