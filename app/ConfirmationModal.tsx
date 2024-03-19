import useConfirmationModal from './hooks/useConfirmationModal'
import Portal from './Portal'
const ConfirmationModal = () => {
	const {isOpened, confirm, decline} = useConfirmationModal()

	if (!isOpened) return null
	return (
		<Portal wrapperID="modal">
			<div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center">
				<div className="border-t-4 border-t-tertiary  bg-secondary px-20 md:px-28 md:py-16 py-10 pb-5 md:pb-10 space-y-10">
					<p className=" text-center text-xl md:text-3xl">Delete this task?</p>
					<div className="flex gap-4 justify-center">
						<button
							className="border-2 border-tertiary bg-secondary rounded-md px-6 md:px-12 py-2"
							onClick={confirm}
						>
							Yes
						</button>
						<button
							className="border-2 border-primary bg-secondary rounded-md px-6 md:px-12 py-2"
							onClick={decline}
						>
							No
						</button>
					</div>
				</div>
			</div>
		</Portal>
	)
}

export default ConfirmationModal
