import express from 'express'
import { ChangeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router=express.Router()

//register company
router.post('/register',upload.single('image'),registerCompany)

//company login
router.post('/login',loginCompany)

// get company data
router.get('/company',protectCompany,getCompanyData)

//post a job
router.post('/post-job',protectCompany,postJob)

//Get Applicants data of company
router.get('/applicants',protectCompany,getCompanyJobApplicants)

// Get Company job list
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

// change Applications Status
router.post('/change-status',protectCompany,ChangeJobApplicationsStatus)

//change Application visiblity
router.post('/change-visibility',protectCompany,changeVisibility)

export default router