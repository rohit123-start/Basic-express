import axios from "axios";
import FormData from "form-data";
import fs from 'fs'

let imageController = {}

const formdata = new FormData()

imageController.upload = (req,res) => {

    if (!req.file) {
        return res.status(400).send('No files were uploaded.');
    }

    res.json({status:"files recieved"})

}

imageController.send = async (req,res) => {

    const fileBuffer = fs.readFileSync('public/sample.png');

    console.log(fileBuffer)

    formdata.append('file',fileBuffer,{
        filename: 'sample.png', // Adjust the filename as needed // Adjust the content type as needed
      })

      axios.post('http://localhost:4000/upload', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('Response:', response.data);
        fs.unlink('public/uploads/file-1712063287368.png', (err) => {
            if (err) {
              console.error('Error deleting file:', err);
              return;
            }
            console.log('File deleted successfully');
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });

}



export default imageController