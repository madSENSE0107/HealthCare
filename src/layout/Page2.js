import Sleep2 from  "../assets/Sleep2.svg"
// import logo from "../assets/logo.png"
const Page2 = () => {
    return ( 
        <div className="flex flex-col bg-yellow-300 md:flex-row p-4 md:px-48 md:p-10">
            
            <div className="text-2xl md:text-5xl text-white font-semibold  py-4">
            
                ON DEMAND<br/>INSOMNIA SUPPORT.<br/>DAY or NIGHT
            <div className="bg-yellow-300 text-black font-normal pb-8 pt-4 text-base">Chat with someone you can trust
                Meet your personal  <br/> sleep guide via a video call within one hour of booking
            </div> 
            <div className="text-gray-100 md:mt-6 font-normal text-base">Coming later this year</div>
            </div>
            <img src={Sleep2} className="md:h-72 md:mt-20 md:ml-5 p-6 rounded-md" alt="hero1"/>
            
            
            
        </div>
     );
}
 
export default Page2;