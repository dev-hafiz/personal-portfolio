
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HeaderBar from './Pages/Shared/HeaderBar/HeaderBar';
import Home from './Pages/Home/Home/Home';
import MyProjects from './Pages/Home/MyProjects/MyProjects';
import ContactInfo from './Pages/Home/ContactInfo/ContactInfo';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
               <HeaderBar/>
               <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/myProjects" element={<MyProjects />} />
               <Route path="/contact" element={<ContactInfo />} />
               
               </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;