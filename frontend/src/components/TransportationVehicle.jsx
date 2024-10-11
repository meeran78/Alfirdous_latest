import { useNavigate } from "react-router-dom"
import PageBorder from "./PageBorder";
const TransportationVehicle = () => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate('/ContactUs');
  }

  return (
    <div className=" text-white text-center flex flex-col gap-6 justify-center items-center ">
      <h1 className="text-2xl">Transportation Vehicle </h1>
      <hr className="w-[380px] h-[1px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>  
        <p className="leading-10">
        Our funeral vehicle transportation service provides dignified and reliable transportation for your loved one's final journey. With a fleet of meticulously maintained vehicles and experienced drivers, we ensure that every aspect of the transportation process is handled with the utmost care and professionalism. From hearse services to family transportation, we offer a range of options to accommodate your needs and preferences during this difficult time. Our dedicated team is committed to providing compassionate support and ensuring a smooth and respectful journey for your loved one and your family. Trust us to handle the transportation details with sensitivity and efficiency, allowing you to focus on honoring the memory of your cherished family member.
        </p>
        <button onClick={handleOnClick} className='mb-10'>Contact US</button>
      <PageBorder />
    </div>
  )
}

export default TransportationVehicle