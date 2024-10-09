import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackgroundVideoPlayer from './BackgroundVideoPlayer';

import { useNavigate } from 'react-router-dom';
import PageBorder from './PageBorder';
const LandingPage = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/ContactUs')
    }
    
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
			<div className='w-[100%] h-screen'>
				<BackgroundVideoPlayer />
				{/* <div className='absolute top-0 left-0 w-full h-full '></div> */}
				{/* <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-2xl text-white font-semibold '> */}
				<div className='absolute top-[350px] text-center'>
					<h1
						data-aos='fade-up'
						data-aos-offset='0'
						data-aos-duration='1500'
						data-aos-once='true'
						className='text-center text-3xl '>
						Islamic Funeral/Burial & Repatriation Services
					</h1>
					<p
						data-aos='fade-up'
						data-aos-offset='0'
						data-aos-duration='1500'
						data-aos-once='true'
						className='text-center text-2xl'>
						خدمات إسلامية لدفن و شحن الجنائز
					</p>
					<button className='w-[300px] h-[50px] text-xl bg-errie-black text-white mt-2 rounded-lg ' onClick={handleOnClick}>
						Contact Us
					</button>
				</div>
			</div>
			<PageBorder />
		</>
	);
};

export default LandingPage;
