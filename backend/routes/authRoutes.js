const express = require('express');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const path = require('path');
const multer = require('multer');
const User = require('../models/User'); // Assume you have a userModel.js for Mongoose model
const crypto = require('crypto');
const FitnessProfessional = require('../models/FitnessProfessional'); // Assuming the file name is FitnessProfessional.js
const WorkoutPlan = require('../models/WorkoutPlan');
const WorkoutPlanTable = require('../models/WorkPlansTable');
// const Message = require('./models/messageSchema');
const contentSchema = require('../models/content');



const router = express.Router();


router.post('/register', async (req, res) => {
    const { email, password, firstname, lastname, type } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData =  await User.findOne({email});
    console.log(userData, 'userData')
    if(userData) {
      res.status(409).send({ message: 'User already Exists', userData });
    } else {
      const user = new User({ email, password: hashedPassword, firstname, lastname });
      const data = await user.save();
      res.status(200).send({ message: 'Registered successfully', data  });
    }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        user.code = code;
        await user.save();
        // Send code to email
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'trackingwellness@gmail.com',
              pass: 'ermo wdeu mbgj lmgd'
          },
        });
        let mailOptions = {
          from: 'trackingwellness@gmail.com', 
          to: email, 
          subject: 'Login OTP', 
          text: 'Login OTP', 
          html: `<b>Your one time password for Wellness Tracking System ${code}</b>` 
      };
      
      try {
        await transporter.sendMail(mailOptions);


      } catch(err){
        console.log(err)
      }
      // send user type also
      const userdeets = {
        firstname : user.firstname,
        lastname  : user.lastname,
        email : user.email,
        type : user.type ? user.type : " "
      }
      res.status(200).send({ message: 'Code sent to email',userDetails:userdeets});
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
  }catch(err) {
    console.log(err)
  }
});

router.post('/verify-code', async (req, res) => {
    const { email, type ,code } = req.body;
    const user = await User.findOne({ email});
    if (user && code === user.code) {
        res.status(200).send({ message: 'Authenticated successfully' });
    } else {
        res.status(401).send({ message: 'Invalid code' });
    }
});

router.post('/forget-password', async (req, res) => {
  const { email  } = req.body;


  const user = await User.findOne({ email });
  // Verify if email exists in your database (pseudo code)
  if (!user) {
    return res.status(400).send({ message: 'Email not registered.' });
  }

  // Generate a reset token and save it to the database (pseudo code)
  const token = crypto.randomBytes(32).toString('hex');
  user.resetToken = token;
  user.tokenExpiry = Date.now() + 3600000; // Token valid for 1 hour

  await user.save();

  // Send email with the reset link
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'trackingwellness@gmail.com',
        pass: 'ermo wdeu mbgj lmgd'
    },
  });
  let mailOptions = {
    from: 'trackingwellness@gmail.com', 
    to: email, 
    subject: 'Reset Password', 
    text: 'Reset Password', 
    html: `<b>Click this link to reset your password: http://localhost:5173/reset-password/${token}</b>` 
  };

  
  await transporter.sendMail(mailOptions);
  res.send({ message: 'Reset link sent to email.' });
});


router.post('/reset-password', async (req, res) => {
  const { token, password } = req.body;

  // Find user with this token and where token hasn't expired (pseudo code)
  const user = await User.findOne({ 
    resetToken: token, 
    tokenExpiry: { $gt: Date.now() } 
  });
  if (!user) {
    return res.status(400).send({ message: 'Invalid or expired token.' });
  }

  // Hash new password and update the user's password in the database
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  user.password = hashedPassword;
  user.save()

  // Invalidate the reset token
  user.resetToken = null;
  user.tokenExpiry = null;

  res.send({ message: 'Password reset successfully.' });
})

router.get('/search-fitness-professional', async (req, res) => {
  try {
      const searchParams = req.query;
      let query = {}
      if(Object.keys(searchParams).length) {
        query = {$and:[]}
        Object.keys(searchParams).forEach(key => {
          if(key == "firstname") {
            const regex = new RegExp(`^${searchParams[key]}$`, 'i')
            query['$and'].push({"$or" : [ { firstname: { $regex: regex } },
              { lastname: { $regex: regex } }
          ]}) 
          } else {
            query.$and.push({[key]:{ "$regex" : searchParams[key] , "$options" : "i"}});

          }
        })
      }
      const results = await FitnessProfessional.find(query).limit(10);

      res.status(200).send({data: results});

  } catch (err) {
      console.log(err)
      res.status(500).send({ message: 'Internal Server Error', error: err });
  }
});

router.get('/get-workout-plan', async (req, res) => {
  try {
    const {email} = req.query;
      console.log(email)
    
      const plan = await WorkoutPlan.findOne({userEmail: email});
      console.log(plan)

      if (!plan) {
          return res.status(404).send({ message: 'No workout plan found for this email.' });
      }

      res.status(200).send({ data: plan });

  } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Internal Server Error', error: err });
  }
});



router.get('/get-workout-plan_table', async (req, res) => {
  try {
    
      const plans = await WorkoutPlanTable.find({});
      console.log(plans)

      res.status(200).send({ data: plans });

  } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Internal Server Error', error: err });
  }
});

// router.get('/chats/:email', async (req, res) => {
//   const { email } = req.params;
//   try {
//     const userChats = await Message.find({
//       $or: [{ senderEmail: email }, { receiverEmail: email }]
//     }).sort({ timestamp: -1 });
//     res.json(userChats);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });




router.get('/contents', async (req, res) => {
  try {
    const { search, mode, type, instructor, sort } = req.query;

    let query = {};
    let sortOptions = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        // { description: { $regex: search, $options: 'i' } }
      ];
    }

    if (mode) {
      query.mode = mode;
    }

    if (type) {
      query.type = type;
    }

    if (instructor) {
      query.instructor = instructor;
    }


    
    // Sorting by date
    if (sort === 'asc' || sort === 'desc') {
      sortOptions.date = sort === 'desc' ? -1 : 1;
    }

    let contents = await contentSchema.find(query).sort(sortOptions);

    const data = []
    contents = contents.map(content => {
      let object = {
        date : content.date,
        description: content.description,
        instructor: content.instructor,
        mode: content.mode,
        title: content.title,
        type: content.type,
        videoId: content.videoId,
        videoUrl:  `http://localhost:3001/uploads/Videos/${content.videoId}.${content.mode == 'Video' ? 'mp4': 'pdf'}`
      }
      data.push(object)
    });
    // console.log(contents)
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/Videos');
  },
  filename: function(req, file, cb) {
      cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post('/content', upload.single('file'), async (req, res) => {
  try {
      const { title, description, type, instructor, mode } = req.body;
      const originalFileName = req.file.filename;
      const fileExtension = path.extname(originalFileName);
      const videoId = originalFileName.replace(fileExtension, '');
      const existingContent = await contentSchema.findOne({ videoId, instructor });

      if (existingContent) {
        return res.status(400).json({ message: "A content with this videoId already exists." });
      }

      // Create a new content item with today's date
      const newContent = new contentSchema({
          title,
          description,
          type,
          instructor,
          date: new Date(), // Sets the date to today
          videoId,
          mode
      });


      // Save the new content item to the database
      await newContent.save();

      res.status(201).json(newContent);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
})

module.exports = router;
