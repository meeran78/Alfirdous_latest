import BackgroundVideoPlayer from '../../components/BackgroundVideoPlayer';

const FuneralServiceDetails = () => {
	return (
		<div className='w-full h-full text-white flex flex-col text-center'>
			<BackgroundVideoPlayer />
			<div className='m-10 border-2 border-black p-5 bg-slate-800'>
				<div className='text-xl'>
					We understand that making the many decisions which come at a time of
					loss can be difficult. Therefore, we offer our support by making
					immediate arrangements as easy for you as needed. Upon death, those
					with the deceased are encouraged to remain calm, pray for the
					departed, and begin preparations for burial. Since it is the our
					belief to bury the deceased as soon as possible after death, our staff
					are accustomed to responding quickly and carefully in order to meet
					the family’s needs.
				</div>

				<hr className='w-[380px] h-[1px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10'></hr>
				<div className='space-y-10'>
					<h2 className='text-2xl space-y'>Our Burial Arrangements Include</h2>
					<div className='text-xl'>
						<ul className='p-4'>
							<li>
								Removing your loved one from the place of death and transporting
								to our facility or your local Masjid.
							</li>
							<li> Removal for females are done by females only.</li>
							<li>
								Religious washing and shrouding of your loved ones remains.
							</li>
							<li>Female remains will be washed by females only.</li>
							<li>Providing a plain wooden casket or casket of your choice.</li>
							<li>Transporting your loved one to the Masjid of your choice.</li>
							<li>
								Transportation of your loved one from the Masjid to the cemetery
								of your choice.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='m-10 border-2 border-black p-5 bg-gray-500 space-y-3'>
        <h1 className='text-2xl'>All Funerals are done according to your personal religious beliefs</h1>
        <h1 className='text-[20px]'>WHAT WE OFFER</h1>
        <p>We understand that making the many decisions which come at a time of loss can be difficult. Therefore, we offer our support by making immediate arrangements as easy for you as needed. Upon death, those with the deceased are encouraged to remain calm, pray for the departed, and begin preparations for burial.</p>
      </div>

      <div className='m-10 border-2 border-black p-5 bg-sky-700 space-y-3'>
        <h1 className='text-2xl'>TRADITIONAL ISLAMIC BURIAL</h1>
        <p>We specialize in providing traditional Islamic Funeral Services to our community in accordance to Islamic Law and Shariah. This includes transfer of remains to our facility, washing and shrouding, casket, Funeral Prayers (Salat-ul-Janaza’h) and burial.</p>
      </div>

      <div className='m-10 border-2 border-black p-5 bg-orange-300 space-y-3'>
        <h1 className='text-2xl'>PRAYER HALL FOR MEMORIAL SERVICES</h1>
        <p>We have separate prayer halls for men and women to hold Memorial Services. Relatives and friends can be invited to sit down and read the Holy Quran together (no food allowed).</p>
      </div>

      <div className='m-10 border-2 border-black p-5 bg-cyan-500 space-y-3'>
        <h1 className='text-2xl'>REMOVAL OF THE DECEASED</h1>
        <p>Our qualified staff will remove the body of the deceased from the home or hospital with the greatest care and respect. Removal for females are done by females only.</p>
      </div>

      <div className='m-10 border-2 border-black p-5 bg-blue-500 space-y-3'>
        <h1 className='text-2xl'>GHUSL</h1>
        <p>We make Ghusl Mayyit (Washing of the deceased) available for our clients at Islamic Internation Funeral Services. The ritual is performed with pure and sanctified well and rain water by qualified personnel. As we know, washing and shrouding are vital for the bodies of the deceased as well as unclean living. Female remains will be washed by females only.</p>
      </div>

      <div className='m-10 border-2 border-black p-5 bg-red-300 space-y-3'>
        <h1 className='text-2xl'>KAFFAN</h1>
        <p>We take all necessary size precautions to make sure that the body of the deceased is properly shrouded with 3 pieces of white cloth.</p>
      </div>

      <div className='m-10 border-2 border-black p-5 bg-purple-300 space-y-3'>
        <h1 className='text-2xl'>TRANSPORTATION OF DECEASED</h1>
        <p>When choosing a masjid of choice, it allows us to properly transport the deceased to a Masjide that you and your family belong to. We Also Transport your loved one from the Masjid to the cemetery of your choice.</p>
      </div>
		</div>
	);
};

export default FuneralServiceDetails;
