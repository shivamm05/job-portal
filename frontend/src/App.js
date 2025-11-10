// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Applyjob from './pages/Applyjob'
// import Applications from './pages/Applications'
// import RecruiterLogin from './components/RecruiterLogin'
// import Dashboard from './pages/Dashboard'
// import AddJob from './pages/AddJobs'
// import ManageJobs from './pages/ManageJobs'
// import ViewApplications from './pages/ViewApplications'
// import { AppContextProvider } from './context/AppContent'

// function App() {
//   return (
//     <AppContextProvider>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/apply-job/:id' element={<Applyjob />} />
//         <Route path='/applications' element={<Applications />} />
//         <Route path='/dashboard' element={<Dashboard />}>
//           {/* Nested Routes inside Dashboard */}
//           <Route path='add-job' element={<AddJob />} />
//           <Route path='manage-jobs' element={<ManageJobs />} />
//           <Route path='view-applications' element={<ViewApplications />} />
//         </Route>
//       </Routes>
//     </AppContextProvider>
//   )
// }

// export default App
// import React, { useContext } from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Applyjob from "./pages/Applyjob";
// import Applications from "./pages/Applications";
// import Dashboard from "./pages/Dashboard";
// import ManageJobs from "./pages/ManageJobs";
// import AddJob from "./pages/AddJobs";
// import ViewApplications from "./pages/ViewApplications";
// import Navbar from "./components/Navbar";
// import RecruiterLogin from "./components/RecruiterLogin";
// import { AppContext } from "./context/AppContent";

// const App = () => {
//   const { showRecruiterLogin } = useContext(AppContext);

//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       {showRecruiterLogin && <RecruiterLogin />}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/apply-job/:id" element={<Applyjob />} />
//         <Route path="/applications" element={<Applications />} />
//         <Route path="/dashboard/*" element={<Dashboard />}>
//           <Route path="add-job" element={<AddJob />} />
//           <Route path="manage-jobs" element={<ManageJobs />} />
//           <Route path="view-applications" element={<ViewApplications />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Applyjob from "./pages/Applyjob";
import Applications from "./pages/Applications";
import Dashboard from "./pages/Dashboard";
import ManageJobs from "./pages/ManageJobs";
import AddJob from "./pages/AddJobs";
import ViewApplications from "./pages/ViewApplications";
import Navbar from "./components/Navbar";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./context/AppContent";
import 'quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { showRecruiterLogin , companyToken} = useContext(AppContext);
  const location = useLocation();

  // Hide Navbar for dashboard pages
  const hideNavbar = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen">
      {!hideNavbar && <Navbar />}
      {showRecruiterLogin && <RecruiterLogin />}
      <ToastContainer/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<Applyjob />} />
        <Route path="/applications" element={<Applications />} />

        {/* Dashboard nested routes */}
        <Route path="/dashboard/*" element={<Dashboard />}>
        {companyToken?<>
           <Route path="add-job" element={<AddJob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
        </>:null
        }
          
        </Route>
      </Routes>
    </div>
  );
};

export default App;




