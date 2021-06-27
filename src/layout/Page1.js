import Sleep1 from  "../assets/Sleep1.svg"
import logo from "../assets/logo.png"
const Page1 = () => {
    return ( 
        <div className="flex flex-col bg-yellow-100 md:flex-row  md:px-48 md:p-10">
                <div>
                    <div className="text-2xl md:text-5xl font-semibold  py-4 p-4">
                        <div className="bg-white p-2 mb-3   rounded-md shadow-lg h-10 w-10 md:mb-6 md:h-16 md:w-16"><img src={logo} alt="logo" className="" /></div>
                        THE INSOMNIA EDGE.<br/>Confident Sleep.<br/>Win in LIFE !
                    </div>
                    <div className="bg-yellow-100 px-4 pb-8 ">Prescription-Strength all in one place just for you so that you <br/> 
                        can have a better morning and a better life
                        <div className="text-gray-400 md:mt-6">Coming later this year</div>
                    </div> 

                </div>
                    
            
            
            
            <img src={Sleep1} className="md:h-64 md:mt-24 p-6 rounded-md" alt="hero1"/>
            

            
        </div>
     );
}
 
export default Page1;