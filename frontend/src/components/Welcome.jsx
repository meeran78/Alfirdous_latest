import { useNavigate } from 'react-router-dom';
import PageBorder from './PageBorder';

const Welcome = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/ContactUs')
  }
  return (
    
    <div className="h-full">
      
      <div className="flex flex-col justify-center items-center text-text-primary p-2">
        <h1 className='text-center py-5 text-2xl '>WELCOME TO </h1>
        <h2 className='py-3 text-xl'>ALFIRDOUS FUNERAL SERVICE</h2>
        <div className='text-center py-3'>Muslim Funeral Burial Services from the Begining to the End including Ghusl (Religious Washing and Shrouding) and Salatul Janazah (The Funeral Prayer)</div>
        <p className='text-center py-3 leading-10'>
        For thousands of years, burial has been a traditional means of caring for the physical remains of a loved one. Historical precedence is one thing, but for you, burial may simply be the tradition of your family.

The passing of a loved one is never easy and as a leading Muslim funeral home in Brooklyn NY and Tri-State, we have seen all kinds of situations and all kinds of families with different levels of need. Even-though, the one thing that remains common is the necessity for a proper burial. Whether you are in need of burial resources or in need of international shipping or need someone to help you make the proper arrangements, we’re here to help you. We are Islamic International Funeral Services of NY and we are led by our faith in Allah to assist all Muslims of Tri-State NY and all the 50 States. Our staff is very consoling and respectful. We know what it means to lose someone you loved dearly so we will handle your case with the utmost sensitivity and sincerity.
        </p>
        <div>
          <button onClick={handleOnClick} className='mb-10' >Contact Us</button>
        </div>
       
      </div>
      {/* <hr className="w-[380px] h-[1px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr> */}
      <PageBorder />
    </div>
    
  )
}

export default Welcome