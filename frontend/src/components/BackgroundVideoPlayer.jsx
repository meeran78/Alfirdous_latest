import { bgviedeo2 } from '../assets/videos';
function BackgroundVideoPlayer() {
	return (
		<video
			// src='https://static.videezy.com/system/resources/previews/000/020/853/original/clip9_1.mp4'
			src={bgviedeo2}
			autoPlay={true}
			muted={true}
			loop={true}
			className='w-full h-full object-cover overflow-y-hidden'></video>
	);
}

export default BackgroundVideoPlayer;
