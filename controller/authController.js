const userModel = require('../model/userSchema');

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

  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: 'Passwords do not match',
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

module.exports = {
  signup,
};
