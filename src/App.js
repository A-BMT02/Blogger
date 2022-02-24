import { Navbar1 } from "./Navbar1";
import {Navbar2 } from "./Navbar2" ; 
import { SliderBlog } from "./SliderBlog";
import { UserProvider } from "./Context/UserContext" ; 
import HomeSectionA from "./HomeSectionA";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Login from "./Login" ; 
import {BrowserRouter as Router , Routes ,Route, useNavigate ,HashRouter} from "react-router-dom" ; 
import "./App.css" ; 
import { Signup } from "./Signup" ; 
import ProtectedRoute from "./ProtectedRoute";
import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase" ; 
import { UserContext } from "./Context/UserContext" ; 
import { DataProvider } from "./Context/DataContext" ; 

function App() {

    //const [ setUser ] = useContext(UserContext) ; 
  



  return (
    <DataProvider>
      <UserProvider>
    <div className="App">
      <Router basename="/Blogger">
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="signup" element={<><Signup/></>}/>
          <Route
          path="/home" 
          element={
            <ProtectedRoute redirectTo="/construction">
                <><p>Website under Construction</p></>
            </ProtectedRoute>
          }
          />
          <Route path="/" element={ <><Navbar1/> <Navbar2/> <SliderBlog/> <HomeSectionA/> <Subscribe/> <Footer/> </>}/>
          <Route path="/blog" element={<p>Under Construction</p>}/>
          <Route path="/read" element={<p>Under Construction</p>}/>
          <Route path="*" element={<p>Under Construction</p>}/>
        </Routes>
      </Router>
    </div>
    </UserProvider>
    </DataProvider>
  );
}

export default App;
