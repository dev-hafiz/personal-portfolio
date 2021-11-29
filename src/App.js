
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
import ProjectDetails from './Pages/Home/Home/ProjectDetails/ProjectDetails';
import Footer from './Pages/Shared/Footer/Footer';
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
               <Route path="/project/:idProject" element={<ProjectDetails />} />
               
               </Routes>
               <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
