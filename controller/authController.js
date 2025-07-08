const jwtAuth = require('../middleware/jwtAuth');
const userModel = require('../model/userSchema');
const emailValidator = require('email-validator');
const PasswordValidator = require('password-validator');
const bcrypt = require('bcrypt');

// ✅ Define password validation rules
const passwordValidator = new PasswordValidator();
passwordValidator
  .is().min(5)
  .is().max(100)
  .has().letters()
  .has().digits();

const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log("📩 Incoming signup data:", name, email, password, confirmPassword);

  // ✅ Validate fields
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  // ✅ Validate email format
  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format',
    });
  }

  // ✅ Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: 'Passwords do not match',
    });
  }

  // ✅ Validate password strength
  const validPassword = passwordValidator.validate(password);
  if (!validPassword) {
    return res.status(400).json({
      success: false,
      message: 'Password must be at least 6 characters long and contain both letters and digits.',
    });
  }

  try {
    // ✅ Check if email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Account already exists',
      });
    }

    // ✅ Save only required fields
    const userInfo = new userModel({ name, email, password });
    const result = await userInfo.save();
    console.log("✅ User saved to MongoDB:", result);

    return res.status(201).json({
      success: true,
      data: result,
    });
  } catch (e) {
    console.error("❌ Signup error:", e);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required',
    });
  }

  try {
    const user = await userModel.findOne({ email }).select('+password');

    if (!user || !(await  bcrypt.compare(password, user.password))) {
      return res.status(404).json({
        success: false,
        message: 'User not found or password incorrect',
      });
    }

    const token = user.jwtToken();
    user.password = undefined; // Hide password in response

    const cookieOptions = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
      httpOnly: true,
    };

    res.cookie('token', token, cookieOptions);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const getUser = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const logout = (req, res) => {
  try {
    const cookieOption = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };
    res.cookie("token", null, cookieOption);
    res.status(200).json({
      success: true,
      message: "Logged out",
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = {
  signup,
  signin,
  getUser,
  logout,
};
