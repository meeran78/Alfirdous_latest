import { whatsapp } from '../assets/images';
import { MdEmail, MdFacebook } from 'react-icons/md';
const Footer = () => {
	return (
		<footer className='bg-errie-black relative border-t-[2px] border-t-white border-solid text-text-primary '>
			<div className='text-center py-10 space-y-5'>
				<h1 className='text-3xl'>ALFIRDOUS FUNERAL SERVICE</h1>
				<h2 className='text-2xl'>Islamic Center Of Richmond (ICR)</h2>
				<h2>ISLAMIC FUNERAL/BURIAL AND REPATRIATION SERVICES</h2>
				<h2>ألعالمية الإسلأمية ِلخدمات ألجنازة والشحن</h2>
				<button>Schedule A Consultation Call</button>
				<p>
					Main Office:{' '}
					<span className='text-green-500'>
						<a href='https://goo.gl/maps/v12pFqNgCBPjL6ZBA' target='_blank'>
							8481 Hungary Road, Glen Allen, VA, 23060{' '}
						</a>
					</span>
				</p>
				<p>
					Mobile: <span className='text-green-500 px-3'>202-579-0275</span> |
					<span className='text-green-500 px-3'>202-579-0275</span> |
					<span className='text-green-500 px-3'>202-579-0275</span>
				</p>
				<p>
					Office Email:{' '}
					<span className='text-green-500 px-3'>alfirdous@icrva.org</span>
				</p>
				<p>
					Email: <span className='text-green-500 px-3'>meeranm@icrva.org</span>{' '}
					|<span className='text-green-500 px-3'>mazharm@icrva.org</span> |
					<span className='text-green-500 px-3'>nurlm@icrva.org</span> |
					<span className='text-green-500 px-3'>salmmanf@icrva.org</span>
				</p>
				<div className='flex flex-row justify-center'>
					<img src={whatsapp} className='w-[90px] h-[90px]' />
					<div className='flex flex-col items-center'>
						<p className='text-white'>Message us on WhatsApp</p>
						<button className='text-white'>Connect Now</button>
					</div>
				</div>
				<div className='flex flex-row justify-center gap-5'>
					<MdFacebook className='w-[30px] h-[30px]' />
					<MdEmail className='w-[30px] h-[30px]' />
				</div>
        <div>alfirdous@icrva.org © 2024. All Rights Reserved.</div>
				{/* <Link to={routesConstants.HOME}>
					<img src={mosqueicon} className='lg:max-w-[160px] max-w-[120px]' />
				</Link>
		<div className="flex items-center lg:gap-x-7 md:gap-x-6 gap-x-5">
        <Link to = "" className="text-base font-semibold text-white hover:text-risd-blue transition-all duration-300 ease-in-out">
        Already a member?</Link>
        <Link to = "" className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] lg:min-h-[44px] min-h-[40px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135">log in</Link>
      </div> */}
			</div>
		</footer>
	);
};

export default Footer;
