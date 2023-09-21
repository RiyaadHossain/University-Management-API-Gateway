import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';
import { unlinkSync } from 'fs';

cloudinary.config({
  cloud_name: 'dnvg3oecv',
  api_key: '944743251322346',
  api_secret: 'p37dkYdr1e0spkGFsS7SJ_MKbbg'
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },

  filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage });

const uploadToCloudinary = (file: IUploadFile): Promise<ICloudinaryResponse> => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file.path,
            (error: Error, result: ICloudinaryResponse) => {
                unlinkSync(file.path);
                if (error) {
                    reject(error)
                }
                else {
                    resolve(result)
                }
            })
    })
};

export const FileUploader = {
  upload,
  uploadToCloudinary
};
