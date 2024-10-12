import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackgroundVideoPlayer from './BackgroundVideoPlayer';

import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
	const navigate = useNavigate();

	const handleOnClick = () => {
		navigate('/ContactUs');
	};

	useEffect(() => {
		AOS.init({
			disable: 'phone',
			duration: 700,
			easing: 'ease-out-cubic',
		});
	}, []);

	//const [videoLoaded, setVideoLoaded] = useState(false);

	return (
		<>
			<div className='h-[100vh]'>
				<BackgroundVideoPlayer />
				{/* <div className='text-3xl bg-red-600 sm:bg-green-500 md:bg-purple-500 lg:bg-blue-500 xl:bg-yellow-500 2xl:bg-pink-500 3xl:bg-orange-500'>test</div> */}
				{/* <div className='absolute top-0 left-0 w-full h-full '></div> */}
				{/* <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-2xl text-white font-semibold '> */}
				<div className='absolute top-[320px] flex flex-col justify-center font-semibold w-full text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl gap-8 text-text-primary p-1'>
					<h1
						data-aos='fade-up'
						data-aos-offset='0'
						data-aos-duration='1500'
						data-aos-once='true'>
						Islamic Funeral/Burial/Washing & Repatriation Services
					</h1>
					<p
						data-aos='fade-up'
						data-aos-offset='0'
						data-aos-duration='1500'
						data-aos-once='true'>
						خدمات إسلامية لدفن و شحن الجنائز
					</p>
					<button
						className='w-[200px] h-[50px] text-xl bg-errie-black text-white m-auto rounded-lg '
						onClick={handleOnClick}>
						Contact Us
					</button>
				</div>
			</div>
		</>
	);
};

export default LandingPage;
