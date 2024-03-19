import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Data {
	title: string
	body: string
}
const taskSlice = createSlice({
	name: 'task',
	initialState: {
        data: [{title: 'Title', body: 'Body'}],
	},
	reducers: {
		addTask: (state, action:PayloadAction<Data>) => {
			state.data = [action.payload, ...state.data]
		},
		deleteTask: (state,action:PayloadAction<number>) => {
			state.data = state.data.filter((val, index) => index !== action.payload)
		},
	},
})

export const {addTask, deleteTask} = taskSlice.actions

export default taskSlice.reducer