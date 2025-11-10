// import { createContext ,useEffect,useState} from "react";
// import { jobsData } from "../assets/assets";

// export const AppContext = createContext();

// export const AppContextProvider = (props) => {

//   const [searchFilter, setSearchFilter] = useState({
//     title: '',
//     location: ''

//   })

//   const [isSearched,setIsSearched] = useState(false)
//   const[jobs,setJobs] = useState([])

//   const[showRecruiterLogin,setShowRecruiterLogin]=useState(false)

//   const fetchJobs = async()=>{
//       setJobs(jobsData)
//   }
//   useEffect(()=>{
//     fetchJobs()
//   },[])
//   const value = {
//       setSearchFilter,searchFilter,
//       isSearched,setIsSearched,
//       jobs,setJobs,
//       showRecruiterLogin,setShowRecruiterLogin
//   };

//   return (
//     <AppContext.Provider value={value}>
//       {props.children}
//     </AppContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from "react";

import axios from "axios";
import {toast} from "react-toastify"
import {useUser,useAuth} from "@clerk/clerk-react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const backendUrl= process.env.REACT_APP_BACKEND_URL;
  const {user}=useUser()
  const {getToken}=useAuth()
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [searchFilter, setSearchFilter] = useState({ title: '', location: '' });
  const [isSearched, setIsSearched] = useState(false);
  const [companyToken,setCompanyToken]=useState(null)
  const [companyData,setCompanyData]=useState(null)
  const [userData,setUserData]=useState(null)
  const [userApplications,setUserApplications]=useState([])

  
  const fetchJobs=async()=>{
    try {
      const {data}=await axios.get(backendUrl+'/api/jobs')
      if(data.success){
        setJobs(data.jobs)
        console.log(data.jobs);
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      
    }
    
  }

  //Function to fetch company data
  const fetchCompanyData= async()=>{
    try {
      const {data}=await axios.get(backendUrl+'/api/company/company',{headers:{token:companyToken}})

      if(data.success){
        setCompanyData(data.company)
        console.log(data);
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      
    }
  }
  // Function to fetch user data
  const fetchUserData = async()=>{
    try {
      const token=await getToken();
      const {data}=await axios.get(backendUrl+'/api/users/user',
        {headers:{Authorization:`Bearer ${token}`}})

      if(data.success){
        setUserData(data.user)
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
      
    }
  }
  // Function to fetch user applied application
  const fetchUserApplications=async()=>{
    try {
      const token=await getToken()
      const{data}=await axios.get(backendUrl+'/api/users/applications',
        {headers:{Authorization:`Bearer ${token}`}}
      )
      if(data.success){
        setUserApplications(data.applications)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      
    }
  }
  useEffect(()=>{
    fetchJobs()
    const storedCompanyToken = localStorage.getItem('companyToken')

    if(storedCompanyToken)
      setCompanyToken(storedCompanyToken)
  },[])

  useEffect(()=>{
    if(companyToken){
      fetchCompanyData()
    }

  },[companyToken])

  useEffect(()=>{
    if(user){
      fetchUserData()
      fetchUserApplications()
    }

  },[user])

  return (
    <AppContext.Provider value={{
      showRecruiterLogin,
      setShowRecruiterLogin,
      jobs,
      setJobs,
      searchFilter,
      setSearchFilter,
      isSearched,
      setIsSearched,
      companyToken,setCompanyToken,
      companyData,setCompanyData,
      backendUrl,
      userData,setUserData,
      userApplications,setUserApplications,
      fetchUserData,fetchUserApplications,

    }}>
      {children}
    </AppContext.Provider>
  );
};

