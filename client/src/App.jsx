  
  import {BrowserRouter,Routes,Route} from "react-router-dom"
  import Home from "./pages/Home.jsx"
  import About from "./pages/About.jsx"
  import SignIn from "./pages/SignIn.jsx"
  import SignUp from "./pages/SignUp.jsx"
import Header from "./components/Header.jsx"


  const App = () => {
    return (
      <>
      <Header/>
        
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
          </Routes>
        
      </>
    );
  }
  export default App