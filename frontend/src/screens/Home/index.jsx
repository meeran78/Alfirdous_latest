import CallSchedule from '../../components/CallSchedule';
import GetStarted from '../../components/GetStarted';
import LandingPage from '../../components/LandingPage';
import Welcome from '../../components/Welcome';

const Home = () => {
	return (
		<div className='overflow-x-hidden'>
			<div className='w-full h-full text-white flex flex-col gap-5'>
				<LandingPage />
				
				<Welcome />
				
				<GetStarted />
				
				<CallSchedule />
			</div>
		</div>
	);
};

export default Home;
