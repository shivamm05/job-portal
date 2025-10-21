// import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Dashboard = () => {
//     const navigate = useNavigate()

//     return (
//         <div className='min-h-screen flex flex-col'>
//             {/* Header */}
//             <div className='shadow py-4'>
//                 <div className='px-5 flex justify-between items-center'>
//                     <img
//                         onClick={() => navigate('/')}
//                         className='max-sm:w-32 cursor-pointer'
//                         src={assets.logo}
//                         alt="Logo"
//                     />
//                     <div className='flex items-center gap-3'>
//                         <p className='max-sm:hidden'>Welcome, Shivam</p>
//                         <div className='relative group'>
//                             <img className='w-8 border rounded-full' src={assets.company_icon} alt=""/>
//                             <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
//                                 <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
//                                     <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Sidebar + Content */}
//             <div className='flex flex-1 min-h-[calc(100vh-64px)]'>
//                 {/* Sidebar */}
//                 <div className='w-64 min-h-screen border-r-2 bg-gray-50'>
//                     <ul className='flex flex-col pt-5 text-gray-800'>
//                         <NavLink
//                             to='add-job'
//                             className={({isActive}) =>
//                                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`
//                             }
//                         >
//                             <img className="min-w-4" src={assets.add_icon} alt="" />
//                             <p className='max-sm:hidden'>Add Job</p>
//                         </NavLink>

//                         <NavLink
//                             to='manage-jobs'
//                             className={({isActive}) =>
//                                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`
//                             }
//                         >
//                             <img className="min-w-4"src={assets.home_icon} alt="" />
//                             <p className='max-sm:hidden'>Manage Jobs</p>
//                         </NavLink>

//                         <NavLink
//                             to='view-applications'
//                             className={({isActive}) =>
//                                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`
//                             }
//                         >
//                             <img className="min-w-4"src={assets.person_tick_icon} alt="" />
//                             <p className='max-sm:hidden'>View Applications</p>
//                         </NavLink>
//                     </ul>
//                 </div>

//                 {/* Main content */}
//                 <div >
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Dashboard

// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Dashboard Header */}
//       <div className="shadow py-4 bg-white">
//         <div className="px-5 flex justify-between items-center">
//           <img
//             onClick={() => navigate("/")}
//             className="max-sm:w-32 cursor-pointer"
//             src={assets.logo}
//             alt="Logo"
//           />
//           <div className="flex items-center gap-3">
//             <p className="max-sm:hidden">Welcome, Shivam</p>
//             <div className="relative group">
//               <img className="w-8 border rounded-full" src={assets.company_icon} alt="" />
//               <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
//                 <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
//                   <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Sidebar + Content */}
//       <div className="flex flex-1 min-h-[calc(100vh-64px)]">
//         {/* Sidebar */}
//         <div className="w-64 min-h-screen border-r-2 bg-gray-50">
//           <ul className="flex flex-col pt-5 text-gray-800">
//             <NavLink
//               to="add-job"
//               className={({ isActive }) =>
//                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
//                   isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
//                 }`
//               }
//             >
//               <img className="min-w-4" src={assets.add_icon} alt="" />
//               <p className="max-sm:hidden">Add Job</p>
//             </NavLink>

//             <NavLink
//               to="manage-jobs"
//               className={({ isActive }) =>
//                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
//                   isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
//                 }`
//               }
//             >
//               <img className="min-w-4" src={assets.home_icon} alt="" />
//               <p className="max-sm:hidden">Manage Jobs</p>
//             </NavLink>

//             <NavLink
//               to="view-applications"
//               className={({ isActive }) =>
//                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
//                   isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
//                 }`
//               }
//             >
//               <img className="min-w-4" src={assets.person_tick_icon} alt="" />
//               <p className="max-sm:hidden">View Applications</p>
//             </NavLink>
//           </ul>
//         </div>

//         {/* Main content */}
//         <div className="flex-1 p-5">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Add Job", path: "/dashboard/add-job", icon: assets.add_icon },
    { name: "Manage Jobs", path: "/dashboard/manage-jobs", icon: assets.home_icon },
    { name: "View Applications", path: "/dashboard/view-applications", icon: assets.person_tick_icon },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="shadow py-4 bg-white">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={() => navigate("/")}
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt="Logo"
          />
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome, Shivam</p>
            <div className="relative group">
              <img className="w-8 border rounded-full" src={assets.company_icon} alt="" />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="flex flex-1 min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <div className="w-64 min-h-screen border-r-2 bg-gray-50">
          <ul className="flex flex-col pt-5 text-gray-800">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                end
                className={({ isActive }) =>
                  `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                    isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
                  }`
                }
              >
                <img className="min-w-4" src={link.icon} alt={link.name} />
                <p className="max-sm:hidden">{link.name}</p>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

