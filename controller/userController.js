const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res, next) => {
  try {
    const { name, type_of, phone_number, account_address, password } = req.body;

    const userExist = await User.findOne({ account_address: account_address });

    if (userExist) {
      res.send({ status: 409, message: "User already exist!!!" });
      return;
    }

    hashed_password = await bcrypt.hash(password, 10);

    const createNewUser = new User({
      name: name,
      type_of: type_of,
      phone_number: phone_number,
      account_address: account_address,
      password: hashed_password,
    });

    const user = await createNewUser.save();
    res.status(200).json({
      status: 200,
      message: "User Registered Successfully",
      data: {
        user: user,
      },
    });
    return;
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { account_address, password } = req.body;
    console.log(account_address, password);
    const user = await User.findOne({ account_address: account_address });

    if (user == null) {
      res.status(400).send({ status: 400, message: "Invalid Account" });
      return;
    } else {
      hashed_password = await bcrypt.compare(password, user.password);
      console.log(hashed_password);
      if (account_address == user.account_address && hashed_password) {
        res.status(200).json({
          status: 200,
          message: "User Login Successfully",
          data: {
            user: user,
          },
        });
      } else {
        return res.status(401).json({
          msg: "Associated password doesn't match with current account address!",
          status: 401,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};
