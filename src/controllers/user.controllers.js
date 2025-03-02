import {asynHandler} from "../utils/asyncHandler.js"


const userRegistor=asynHandler(async (req,res)=>{
    res.status(200).json({
        message:"Archana Sachin Dhinwa"
    })
})

export default userRegistor ;