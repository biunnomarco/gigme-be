import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET, 
  });
  


  const storageProPic = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        floder: 'proPic', //nome
        allowed_formats: ['jpg', 'jpeg', 'png']
    }
})

const proPic = multer({
  storage: storageProPic
})

export default proPic