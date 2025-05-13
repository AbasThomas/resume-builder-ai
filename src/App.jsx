import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import ResumeBuilder from  "./pages/Builder/Builder"; // your resume page
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home/Home"; // your home page
import Navbar from "./components/Navbar/Navbar";
import Templates from './components/Templates/Templates'
import Features from './components/Featured/Features'
import Pricing from './components/Pricing/Pricing'


function App() {
  return (
    <div>
    <AuthProvider>
      <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/templates" element={<Templates />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
          {/* <Route
            path="/resume"
            element={
              <PrivateRoute>
                <ResumeBuilder />   
              </PrivateRoute>
            }
          /> */}
                 <Route path="*" element={<h2>Page not found</h2>} />

        </Routes>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
// import React from 'react'
// import Box from '../src/pages/box/Box'
// const App = () => {
//   return (
//     <div>
//       <Box/>
//     </div>
//   )
// }

// export default App