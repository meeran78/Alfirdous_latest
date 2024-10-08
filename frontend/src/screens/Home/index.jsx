import CallSchedule from '../../components/CallSchedule';
import GetStarted from '../../components/GetStarted';
import LandingPage from '../../components/LandingPage';
import Welcome from '../../components/Welcome';

const Home = () => {
	return (
		<div className='overflow-x-hidden'>
			<div className='w-full h-full text-white flex flex-col gap-5'>
				<div className='flex w-full h-full'>
					<LandingPage />
				</div>
				<div className='flex w-[400px] h-[400px]'>
					<Welcome />
				</div>
				<div className='flex w-[400px] h-[400px]'>
					<GetStarted />
				</div>
				<div className='flex w-[400px] h-[400px]'>
					<CallSchedule />
				</div>
			</div>
		</div>
	);
};

export default Home;
