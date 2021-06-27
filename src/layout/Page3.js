import Sleep3 from  "../assets/Sleep3.svg"
// import logo from "../assets/logo.ng"
const Page3 = () => {
    return ( 
        <div className="flex flex-col bg-yellow-100 md:flex-row p-4 md:px-48 md:p-10">
            
            <div className="text-2xl md:text-4xl font-semibold bg-yellow-100 flex flex-col py-4 ">
            
                CARING IS SHARING
                <div className="bg-yellow-100 text-base font-normal  pb-8 mt-8">
                    Having a second set of eyes on your sleep can give you peace of mind.
                    <div className="text-xl mt-4">Better Sleep, Better Life</div> 
                </div> 
            </div>
            
            
            <img src={Sleep3} className="md:h-36 md:mt-20 m-2 rounded-md" alt="hero1"/>
            
            
            
        </div>
     );
}
 
export default Page3;