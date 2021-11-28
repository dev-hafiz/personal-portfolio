
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HeaderBar from './Pages/Shared/HeaderBar/HeaderBar';
import Home from './Pages/Home/Home/Home';
import MyProjects from './Pages/Home/MyProjects/MyProjects';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
               <HeaderBar/>
               <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/myProjects" element={<MyProjects />} />
               
               </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
