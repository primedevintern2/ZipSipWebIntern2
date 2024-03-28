import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Contact from "../pages/Contact";
import Shipping from "../pages/Shipping";
import AboutUs from "../pages/AboutUs";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route path="contact" element={<Contact/>}/>
            <Route path="shipping" element={<Shipping/>}/>
            <Route path="aboutus" element={<AboutUs/>}/>
            <Route path="error" element={<Error/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter