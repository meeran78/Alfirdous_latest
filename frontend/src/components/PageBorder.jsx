const PageBorder = () => {
	return (
		<>
			{/* <svg viewBox='0 120 500 500' preserveAspectRatio='xMinYMin meet'>
				<path
					d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z'
					style={{
						stroke: 'none',
						fill: 'rgb(75, 71, 73)',
					}}></path>
			</svg> */}
			<div className='inline-flex items-center justify-center w-full'>
				<hr className='w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700'></hr>
				<div className='absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900'>
					<svg
						className='w-4 h-4 text-white'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 18 14'>
						<path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
					</svg>
				</div>
			</div>
		</>
	);
};

export default PageBorder;
