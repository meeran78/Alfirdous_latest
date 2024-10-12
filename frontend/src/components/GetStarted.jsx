import PageBorder from './PageBorder';
import { img1, img2, img3 } from '../assets/images';
const GetStarted = () => {
	return (
		<div className='flex flex-col justify-center items-center gap-10 text-text-primary p-2'>
			<div className='text-2xl'>HOW TO GET STARTED</div>
			<div className='text-center'>
				We will arrange pickup and complete all the necessary paperwork. Since
				it is our duty as Muslims to bury the deceased as soon as possible after
				death, our staff are accustomed to making immediate funeral arrangements
				for burial or overseas / international shipping usually within 24 hours.
			</div>
			<div className='flex gap-10 flex-col justify-center items-center'>
				<div className='flex flex-col justify-center items-center gap-10'>
					<img
						src={img1}
						alt='Step 1'
						className='w-[200px] h-[200px] rounded-full mb-5'
					/>
					<h1 className='text-xl'>ARRANGE PICKUP</h1>
					<p className='text-center'>
						Removing your loved one from the place of death and transporting to
						our facility or your local Masjid.
					</p>
					<p className='text-center absolute text-xl font-bold mb-[185px]'>STEP 1</p>
				</div>
				<div className='flex flex-col justify-center items-center gap-10'>
					<img
						src={img2}
						alt='Step 2'
						className='w-[200px] h-[200px] rounded-full mb-5'
					/>
					<h1 className='text-xl'>ARRANGE BURIAL</h1>
					<p className='text-center'>
						Religious washing and shrouding of your loved ones remains. Arrange
						a casket of your choice. Arrange The Janazah prayer.
					</p>
					<p className='text-center absolute text-xl font-bold mb-[185px]'>STEP 2</p>
				</div>
				<div className='flex flex-col justify-center items-center gap-10'>
					<img
						src={img3}
						alt='Step 3'
						className='w-[200px] h-[200px] rounded-full mb-5'
					/>
					<h1 className='text-xl'>THE BURIAL EVENT</h1>
					<p className='text-center'>
						Transporting your loved one to the Masjid of your choice and from
						the Masjid to the cemetery of your choice.
					</p>
					<p className='text-center absolute text-xl font-bold mb-[185px]'>STEP 3</p>
				</div>
			</div>
			<div className='mb-10'>
				<button>Schedule a Call</button>
			</div>
			<PageBorder />
		</div>
	);
};

export default GetStarted;
