import PageBorder from "./PageBorder"

const CallSchedule = () => {
  return (
    <div  className="text-center align-middle p-2">
      <div className="flex flex-col justify-center items-center mb-10">
        
        <h1 className='text-2xl'>SCHEDULE A CONSULTATION CALL</h1>
        <hr className="w-[380px] h-[1px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>
        <h1 className="mb-8 text-xl">NEED HELP? HAVE QUESTIONS?</h1>
        <p className="leading-10">Schedule a Consultation Call. Through the personalized call, you’ll be speaking with our coordinator by phone to discuss your top needs and concerns, identify the best service for your loved one and create a plan that works for you.</p>
        <button>Book A Free Consultation</button>
      </div>
      <PageBorder />
    </div>
  )
}

export default CallSchedule