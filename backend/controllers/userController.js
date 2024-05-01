import User from "../models/userModel.js";
import { hashPassword } from "./../helpers/userAuth.js";

const userController = async (req, res) => {
    const { name, email, address, password } = req.body;
    const { filename } = req.file;

    // checking whether a user provided all requisite information

    if (!name) {
      return res.status(401).json({ message: "Name is required" });
    }
    if (!email) {
      return res.status(401).json({ message: "Email is required" });
    }
    if (!address) {
      return res.status(401).json({ message: "Address is required" });
    }
    if (!password) {
      return res.status(401).json({ message: "Password is required" });
    }
    if (!filename) {
      return res.status(401).json({ message: "User Photo is required" });
    }

  try {    

    // checking whether a user is already registered or not
    let existinguser = await User.findOne({ email });
    if (existinguser) {
      return res
        .status(201)
        .json({ message: "User already registered, please login" });
    }

    let hashedPassword = await hashPassword(password);

    // creating new user
    let user = await new User({
      name,
      email,
      address,
      password: hashedPassword,
      img: filename,
    }).save();
    res.send(user);

    res.status(200).json({
      success: true,
      message: "You registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

export default userController;

// // res.send(req.body)
// console.log(req.body)
// // res.send(req.file)

// console.log(req.file.filename)
