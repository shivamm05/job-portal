import Job from "../models/Job.js"
import mongoose from "mongoose"



// Get all jobs
export const getJobs=async(req,res)=>{
    try {
        const jobs=await Job.find({visible:true})
        .populate({path:'companyId',select:'-password'})

        res.json({success:true,jobs})
    } catch (error) {
        res.json({success:false,message:error.message})
        
    }

}// Get a single job by id
export const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(">>> getJobById called with id:", id);

    // If id is NOT a valid ObjectId (like "1", "23"), handle gracefully
    if (!mongoose.Types.ObjectId.isValid(id)) {
      // Try finding by string _id (if seeded with string)
      const job = await Job.findOne({ _id: id }).populate({
        path: "companyId",
        select: "-password",
      });

      if (!job) {
        return res.status(404).json({ success: false, message: "Job not found" });
      }

      return res.json({ success: true, job });
    }

    // Normal ObjectId find
    const job = await Job.findById(id).populate({
      path: "companyId",
      select: "-password",
    });

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.json({ success: true, job });
  } catch (error) {
    console.error("Error in getJobById:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
