const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const FilmProduction = require("../models/filmProduction");

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}).single("VideoUpload"); // Match this name with the file input field's name in your form

// Define route for the root URL ("/")
router.get("/", (req, res) => {
  res.render("index"); // This renders your index.ejs file
});

// Handle form submission
router.post("/submit-form", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("File upload error");
    }

    const newFilmProduction = new FilmProduction({
      name: req.body.Name,
      fatherName: req.body.FatherName,
      motherName: req.body.MotherName,
      address: req.body.Address,
      actingRole: req.body.ActingRole,
      mobileNumber: req.body.MobileNumber,
      whatsappNumber: req.body.WhatsAppNumber,
      video: {
        data: fs.readFileSync(
          path.join(__dirname, "../public/uploads/" + req.file.filename)
        ),
        contentType: "video/mp4",
      },
    });

    newFilmProduction
      .save()
      .then(() => {
        // Redirect to the payment page after successful form submission
        res.redirect("/payment"); // Adjust the route to your payment page

        // Alternatively, render the payment page directly
        // res.render("paymentPage", { /* pass any necessary data */ });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).send("Data save error");
      });
  });
});

// Payment Page Route
router.get("/payment", (req, res) => {
  // Render your payment page (replace 'paymentPage' with your actual EJS file name)
  res.render("paymentPage", {
    /* pass any necessary data to the payment page */
  });
});

module.exports = router;
