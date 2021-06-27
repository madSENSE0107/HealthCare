import { useState } from "react";

const Navbar = () => {
    
        const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="bg-gray-900  text-white text-center"><a href="https://www.mygov.in/covid-19">Covid-19 news</a> </div>  
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-row items-center justify-between h-16">
            
              <a className="text-2xl text-yellow-900 " href="/">
                HealthCare
              </a>
              <div className="hidden md:block">
                <div className="ml-10  space-x-4">
                  <a
                    href="/"
                    className=" hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md   font-medium"
                  >
                    How it Works
                  </a>
                  <a
                    href="/"
                    className=" hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md  font-medium"
                  >
                    Resources
                  </a>

                  <a
                    href="/"
                    className=" hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md   font-medium"
                  >
                    About us
                  </a>

                  <a
                    href="/"
                    className=" hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md   font-medium"
                  >
                    Contact
                  </a>

                  

                  
                </div>
              </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-yellow-300 inline-flex items-center justify-center p-1 rounded-md text-white hover:bg-gray-800 focus:outline-none  "
                
              >
                
                {!isOpen ? (
                  <svg
                    className="block h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        
          {(isOpen) &&
              <div className="md:hidden" id="mobile-menu">
                <div  className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="text-black hover:bg-yellow-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  How it works
                </a>

                <a
                  href="/"
                  className="text-black hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Resources
                </a>

                <a
                  href="/"
                  className="text-black hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About us
                </a>

                <a
                  href="/"
                  className="text-black hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>

                
              </div>
            </div>
          } 
       
      </nav>

      
    </div>
    
    );
}
 
export default Navbar;