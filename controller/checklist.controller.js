import checklistSubmission from '../model/checklist.model.js';

export const getCheckListSubmission = async (req, res) => {
    try {
       const checklist = await checklistSubmission.find({deleted: false});
       if(!checklist) {
         res.status(200).json({
            status: "failed",
            message: "No records found"
         })
       }
    
       res.status(200).json({
        status: "success",
        message: checklist
     })
    } catch(err) {
        res.status(err.status).json({
            status: "failed",
            message: err.message
         })
    }
}

