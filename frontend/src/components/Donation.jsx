import { innaLillah } from '../assets/images/index';

const Donation = () => {
	return (
		<div className='flex flex-col justify-center items-center gap-8 text-center text-text-primary p-2'>
			<img src={innaLillah} alt='Inna Lillah' className='w-[200px] h-[200px] rounded-s mb-5' />
			<h1 className='text-2xl'>Donate</h1>
			<h1 className='text-xl'>RELIEVE THE BURDEN OF MUSLIM FAMILIES</h1>
			<h2 className='text-xl'> You can make all the difference.</h2>
			<h2>
				We created a Sadaqa Janazah (Burial Fund) to provide financial
				assistance to our brothers and sisters for Islamic burials.
			</h2>
			<p>
				As a Muslim and human being it is important to receive a proper burial.
				Please help your Muslim brothers and sisters from improper burial and
				need your help saving as many as we can for proper islamic burial.
				Countless poor families and new Muslims in our community benefit from
				this fund. Your generous donation will remove the financial burden of a
				Muslim family in the most difficult time of their lives.
			</p>
			<button className='mb-10'>Donate</button>
		
		</div>
	);
};

export default Donation;
