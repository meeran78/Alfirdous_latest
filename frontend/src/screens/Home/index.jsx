import CallSchedule from '../../components/CallSchedule';
import Donation from '../../components/Donation';
import FuneralService from '../../components/FuneralService';
import GetStarted from '../../components/GetStarted';
import LandingPage from '../../components/LandingPage';
import TransportationVehicle from '../../components/TransportationVehicle';

import Welcome from '../../components/Welcome';

const Home = () => {
	return (
		
			<div className='w-full h-full text-white flex flex-col gap-5 '>
				<LandingPage />
			
				<Welcome />
			
				<GetStarted />
				
				<CallSchedule />
			
				<FuneralService />

				<TransportationVehicle />

				<Donation />
			</div>
	
	);
};

export default Home;
