
import Navbar from './layout/Navbar';
import './App.css';
import Page1 from './layout/Page1';
import Page2 from './layout/Page2';
import Page3 from './layout/Page3';
import About from './layout/About';
import Contact from './layout/Contact';


function App() {
  return (
    <div className="">
      <Navbar/>
      <div className="">
       <Page1/>
       
       <Page2/>
       <Page3/>
       <About/>
       <Contact />
      </div>
    </div>
    
  );
}

export default App;
