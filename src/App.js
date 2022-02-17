import { Navbar1 } from "./Navbar1";
import {Navbar2 } from "./Navbar2" ; 
import { SliderBlog } from "./SliderBlog";
import { CardProvider } from "./Context" ; 
import HomeSectionA from "./HomeSectionA";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Login from "./Login" ; 
import {BrowserRouter as Router , Routes ,Route, useNavigate} from "react-router-dom" ; 
import "./App.css" ; 
import { Signup } from "./Signup" ; 
import ProtectedRoute from "./ProtectedRoute";
import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase" ; 
import { CardContext } from "./Context" ; 

function App() {

    //const [ setUser ] = useContext(CardContext) ; 
  



  return (
    <CardProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ <><Navbar1/> <Navbar2/> <SliderBlog/> <HomeSectionA/> <Subscribe/> <Footer/> </>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="signup" element={<><Signup/></>}/>
          <Route
          path="/home" 
          element={
            <ProtectedRoute redirectTo="/construction">
                <><p>Website under Construction</p></>
            </ProtectedRoute>
          }
          />
        </Routes>
      </Router>
    </div>

    </CardProvider>
  );
}

export default App;
