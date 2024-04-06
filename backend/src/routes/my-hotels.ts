import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import { HotelType } from "../models/hotel";

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
      const newHotel: HotelType = req.body;

      //1. upload the image to cloudinary

      const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";" + "base64," + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
      });

      const imageUrls = await Promise.all(uploadPromises);
      newHotel.imageUrls = imageUrls;
      newHotel.lastUpdated = new Date();
      newHotel.userId = req.userId;

      //2. if upload was successful, add the URLs to the new hotel
      //3. Save the new hotel in our DB
      //4. return a 201 status
    } catch (error) {
      console.log("Error creating hotel: ", error);
      res.status(500).json({ message: "Sth went wrong" });
    }
  }
);

//this is going to contain the set of API endpoints that let's the user...
//create, update & view their own hotels.

//creating new hotels in this endpoint.
//whenever the user submits the add hotel form in the frontend...
//api/my-hotels...
//this is the end point the user will use.

//whenever the browser sends us a request it will send us a ...
//http auth token cookie with it...
//and it will have some middleware that parses the...
//cookie & checks if it's valid, then stores the userId in the request.

//The reason we take it from the token or the auth cookie is for...
//security reasons.
