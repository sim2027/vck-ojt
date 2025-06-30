import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
import NotFoundPage from "./pages/NotFoundPage";
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import { useState } from "react";
import DeveloperInfoPopup from "./components/Developerinfo/DeveloperInfoPopup";
const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Simran Dastgir Bhatari"
          studentPhotoUrl="/Images/simran.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/courses" element={< CoursesPage/>}/>
          <Route path="/admission" element={<AdmissionPage/>}/>
          <Route path="/notfound" element={<NotFoundPage/>}/>


          
        </Routes>
        <ChatbotComponent/>
      </Router>
      

    </>
  
    
  );
}

export default App;