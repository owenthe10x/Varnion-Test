'use client'
import Plus from '../public/Plus.svg'
import Image from 'next/image'
import {FormEvent, useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from './(state)/task/taskSlice'

const InputForm = () => {
	const [input, setInput] = useState({title: '', body: ''})
	const addHandler = (e: FormEvent) => {
		e.preventDefault()
		dispatch(addTask(input))
		setInput({title: '', body: ''})
	}
	const dispatch = useDispatch()
	return (
		<form
			className="flex justify-between w-96 h-20 gap-2"
			onSubmit={addHandler}
		>
			<div className="flex flex-col justify-between w-full gap-2">
				<input
					type="text"
					className="bg-secondary placeholder:opacity-70 placeholder:text-textColor p-2 text-sm rounded-md border border-primary w-full"
					placeholder="Title..."
					value={input.title}
					onChange={(e) => setInput({...input, title: e.target.value})}
				/>
				<input
					type="text"
					className="bg-secondary placeholder:opacity-70 placeholder:text-textColor p-2 text-sm rounded-md border border-primary w-full"
					placeholder="About..."
					value={input.body}
					onChange={(e) => setInput({...input, body: e.target.value})}
				/>
			</div>
			<button
				className="aspect-square w-20 h-20 border-[3px] rounded-xl border-primary flex items-center justify-center "
				type="submit"
			>
				<Image alt="" src={Plus} className="w-8" />
			</button>
		</form>
	)
}

export default InputForm
