const User = require('../models/User');
const bcrypt = require('bcryptjs');
const HealthData = require('../models/HealthData');
const { findOne, findByIdAndUpdate } = require('../models/Exercise');

module.exports = {
  async registerUser(userData) {
    try {
      const user = new User({
        username: userData.username,
        password: userData.password,
        name: userData.name,
        email: userData.email,
        dob: userData.dob,
        gender: userData.gender,
        address: userData.address,
      });

      await user.save();
      return user;
    } catch (errror) {
      throw errror;
    }
  },

  async loginUser(email, password) {
    try {
      const user = await User.findOne({ email: email });

      if (!user) {
        throw new Error('User not found');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new Error('Invalid Password');
      }

      return user;
    } catch (error) {
      throw error;
    }
  },

  async BMICalculation(userData, requestData) {
    try {
      const user = await User.findOne({ username: userData.username });
      const height = requestData.height;
      const weight = requestData.weight;

      const bmi = weight / (height * height);

      const level =
        bmi < 18.5
          ? 'Underweight'
          : bmi >= 18.5 && bmi < 25
          ? 'Normal'
          : bmi >= 25 && bmi < 30
          ? 'Overweight'
          : 'Obese';

      const savedHealthData = await HealthData.findOne({ userId: user._id });

      if (savedHealthData) {
        const healthData = await HealthData.findByIdAndUpdate(
          savedHealthData._id,
          {
            $set: { weight, height, BMI: bmi, level },
          },
          { new: true }
        );

        return healthData;
      }

      const healthData = new HealthData({
        height: height,
        weight: weight,
        BMI: bmi,
        level: level,
        userId: user._id,
      });

      await healthData.save();

      return healthData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
