import React from 'react';

const cemeteryList = [
	{
		id: 1,
		name: 'Masjid Yousuf',
		address: [
			{
				city: 'Richmond',
				state: 'VA',
				country: 'USA',
				postalCode: '23228',
				street: '123 Main St',
			},
		],
		phone: '540-777-8888',
		email: '4CvZM@example.com',
		website: 'https://www.masjidyousuf.com/',
		lat: 37.540777,
		lng: -77.436777,
	},
	{
		id: 2,
		name: 'Masjid Al-Husain',
		address: [
			{
				city: 'Richmond',
				state: 'VA',
				country: 'USA',
				postalCode: '23228',
				street: '123 Main St',
			},
		],
		phone: '540-777-8888',
		email: '4CvZM@example.com',
		website: 'https://www.masjidyousuf.com/',
		lat: 37.540777,
		lng: -77.436777,
	},
	{
		id: 3,
		name: 'Masjid Al-Husain',
		address: [
			{
				city: 'Richmond',
				state: 'VA',
				country: 'USA',
				postalCode: '23228',
				street: '123 Main St',
			},
		],
		phone: '540-777-8888',
		email: '4CvZM@example.com',
		website: 'https://www.masjidyousuf.com/',
		lat: 37.540777,
		lng: -77.436777,
	},
];

const Cemeteris = () => {
	return (
		<div className='text-text-primary'>
			<h1 className='text-3xl text-center p-5 '>Muslim Cemeteries</h1>
			<div className='grid grid-cols-3 gap-10 p-10 text-xl'>
				{cemeteryList.map((cemetery) => (
					<div key={cemetery.id}>
						<h2 className='text-2xl'>{cemetery.name}</h2>
						<div className=''>
							{cemetery.address.map((address) => (
								<div key={address.id} className='flex flex-col gap-2 mx-4'>
									<div>{address.street}</div>
									<div>{address.city}</div>
									<div>{address.state}</div>
									<div>{address.country}</div>
									<div>{address.postalCode}</div>
								</div>
							))}
						</div>
						<p>{cemetery.phone}</p>
						<p>{cemetery.email}</p>
						<p>{cemetery.website}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cemeteris;
