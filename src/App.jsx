import { Routes , Route} from "react-router-dom";
import Navbar from "../src/components/Navbar"
import Home from "../src/pages/Home"
import Cart from "../src/pages/Cart"
import Ecozmy from "./pages/Ecozmy";
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return <>
       <div className="mx-0 p-0 relative"> 
        <div className="bg-slate-900">
          <Navbar />
        </div>
        <Routes >
           <Route path="/" element ={<Ecozmy/>}/>
           <Route path="/home" element = {<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </div>
  </>;
};

export default App;
