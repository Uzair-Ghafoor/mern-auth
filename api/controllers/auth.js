import User from '../models/user.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const emailregex = /^[^\s@]+@[^@]+\.[^@]+$/;
    if (!emailregex.test(email)) {
      return res.status(400).json({ error: 'invalid email format' });
    }
    const existedUser = await User.findOne({ username });
    if (existedUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    const existedEmail = await User.findOne({ email });
    if (existedEmail) {
      return res.status(400).json({
        error: 'Email is already taken',
      });
    }
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: 'Password must be six characters long' });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      username,
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '10d',
    });

    const { password: pass, ...rest } = newUser._doc;
    res
      .status(201)
      .cookie('access_token', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict',
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const existedUser = await User.findOne({ username });
    if (!existedUser) {
      return res.status(400).json({ error: 'Invalid Email' });
    }
    const encryptedPassword = bcryptjs.compareSync(
      password,
      existedUser?.password
    );
    console.log(existedUser);
    if (!encryptedPassword) {
      return res.status(400).json({ error: 'invalid Password' });
    }
    const token = jwt.sign({ id: existedUser._id }, process.env.JWT_SECRET, {
      expiresIn: '10d',
    });
    const { password: pass, ...rest } = existedUser._doc;
    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 15 * 24 * 60 * 60 * 1000,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
