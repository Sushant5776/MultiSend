const NotOwner = () => {
	return (
		<div className='h-screen w-full flex justify-center items-center'>
			<h1 className='text-rare dark:text-primary italic font-semibold text-[32px] mb-[2.22vh] animate-bounce'>
				You are not <span className='text-secondary underline'>Owner</span>!
			</h1>
		</div>
	)
}

export default NotOwner
