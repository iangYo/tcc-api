const serviceLocator = require('../serviceLocator/register');

const mongoose = serviceLocator.get('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

model('User', userSchema);
