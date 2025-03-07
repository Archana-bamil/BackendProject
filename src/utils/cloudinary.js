import { v2 as cloudinary } from 'cloudinary';
import fs from "node:fs";


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});



const uploadOnCloudinary=async function(localFilePath)={
  try {
    if(!localFilePath) return null;
 const respone= await   cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
    console.log("file is uploaded on cloudinary    ", respone.url);

    return respone;
    
  } catch (error) {
    fs.unlinkSync(localFilePath)
    return null;
  }
}


export {uploadOnCloudinary}

