const ConfirmationModal = ({onConfirm}: {onConfirm: void}) => {
	return (
		<div className="w-screen h-screen bg-black bg-opacity-70">
			<div className="border-t-tertiary ">
				<p>Delete this task?</p>
				<div className="flex gap-2">
					<button className="border-2 border-tertiary bg-secondary rounded-md">
						Yes
					</button>
					<button className="border-2 border-primary bg-secondary rounded-md">
						No
					</button>
				</div>
			</div>
		</div>
	)
}

export default ConfirmationModal
