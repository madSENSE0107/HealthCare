import chatting from  "../assets/chat.svg"
import help1 from "../assets/help1.svg"
import logo from "../assets/logo.png"
const About = () => {
    return ( 
        <div className="flex bg-indigo-100 flex-col p-4 md:px-48 md:p-10">
          
            
            <div className=" bg-white p-2 mb-3 rounded-md shadow-lg h-10 w-10 md:mb-6 md:h-16 md:w-16"><img src={logo} alt="logo" className="" /></div>
            <div className="text-2xl md:text-4xl font-semibold pb-4">HealthCare <br/> superpowered by <br/>technology</div>
            <div className="flex flex-col md:flex-row justify-around md:m-4 md:p-4">
                 <div className="flex flex-col">
                 <div className="bg-white p-2 mb-3 w-36 h-36 rounded-lg shadow-2xl "><img src={help1} className="" alt="help1"/></div>
                    <div className=" pb-8">Our coaches, therapists, and psychiatrists <br/>
                         work collaboratively to provide care.</div> 
                 </div>
               
               <div className="flex flex-col ">
                    <div className="bg-white p-2 mb-3 w-36 h-36 rounded-lg shadow-2xl"><img src={chatting} className="" alt="chat"/></div>
                    <div className=" pb-8">Our virtual platform is built on the world’s <br/>
                         largest mental health data set.</div>
               </div>
               
            </div>
           
            
             
            
            
            
            
            

            
        </div>
     );
}
 
export default About;