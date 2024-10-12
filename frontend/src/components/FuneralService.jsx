import { useNavigate } from 'react-router-dom';
import PageBorder from './PageBorder';

const FuneralService = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/screens/funeralServicedetails')
    }
  return (
    <div className="text-center flex flex-col gap-6 justify-center items-center text-text-primary p-2">
        <div className='text-2xl'>Funeral Service</div>
        <hr className="w-[380px] h-[1px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>  
        <p className="leading-10">
        We understand that making the many decisions which come at a time of loss can be difficult. Therefore, we offer our support by making immediate arrangements as easy for you as needed. Upon death, those with the deceased are encouraged to remain calm, pray for the departed, and begin preparations for burial. Since it is the our belief to bury the deceased as soon as possible after death, our staff are accustomed to responding quickly and carefully in order to meet the family’s needs.
        </p>
        <button onClick={handleOnClick} className='mb-10'>Learn More</button>

        <PageBorder />
    </div>
  )
}

export default FuneralService