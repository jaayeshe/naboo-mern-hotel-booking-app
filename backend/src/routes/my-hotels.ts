import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5MB
  },
});

//api/my-hotels
router.post(
  "/",
  upload.array("imageFiles", 6),
  async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newHotel = req.body;

      //1. upload the image to cloudinary

      const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";" + "base64," + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
      });
      //2. if upload was successful, add the URLs to the new hotel
      //3. Save the new hotel in our DB
      //4. return a 201 status
    } catch (error) {}
  }
);

//this is going to contain the set of API endpoints that let's the user
//create, update & view their own hotels

//creating new hotels in this endpoint.
//whenever the user submits the add hotel form in the frontend...
//this is the end point the user will use.
//api/my-hotels
