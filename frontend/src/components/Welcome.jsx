import { useNavigate } from 'react-router-dom';
import PageBorder from './PageBorder';

const Welcome = () => {
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate('/ContactUs');
	};
	return (
		<div className='h-full'>
			<div className='flex flex-col justify-center items-center text-text-primary p-2'>
				<h1 className='text-center py-5 text-2xl '>WELCOME TO </h1>
				<h2 className='py-3 text-xl'>ALFIRDOUS FUNERAL SERVICE</h2>
				<div className='text-center py-3'>
					Muslim Funeral Burial Services from the Begining to the End including
					Ghusl (Religious Washing and Shrouding) and Salatul Janazah (The
					Funeral Prayer)
				</div>
				<p className='text-center py-3 leading-10'>
					Al Firdous funeral service, is an non-profit organization providing
					complete janazah services. Our mission is to provide a place for
					preparing the janazah (body washing), performing salatul janazah
					(funeral prayer), and burial in a dedicated Muslim cemetery. Our
					vision is to keep these services low-cost for everyone and free for
					those who cannot afford such expenses at their time of grief and pain.
					The body washing facility is located within Masjid Yousuf (ICR),
					Richomond, Virginia and the cemetery grounds are located within an hr
					drive from the Masjid. These facilities is ideal for providing
					services to Muslims in the Richmond, Chesterfield and surrounding
					areas.
				</p>
				<div>
					<button onClick={handleOnClick} className='mb-10'>
						Contact Us
					</button>
				</div>
			</div>
			{/* <hr className="w-[380px] h-[1px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr> */}
			<PageBorder />
		</div>
	);
};

export default Welcome;
