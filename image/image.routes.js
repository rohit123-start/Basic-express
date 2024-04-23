import express from 'express'
import multer from 'multer'
import imageController from './image.controller.js'

const imageRoutes = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/Basic-Express/public/uploads')  // Save uploaded files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
      // Generate a unique filename for uploaded files
      cb(null, file.fieldname + '-' + Date.now() + ".png")
    }
  })
  
const upload = multer({ storage: storage });

imageRoutes.post('/upload',upload.single('file'),imageController.upload)

imageRoutes.post('/send',imageController.send)

export default imageRoutes