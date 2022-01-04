const serviceLocator = require('../serviceLocator/register');

const mongoose = serviceLocator.get('mongoose');
const { Schema, model } = mongoose;

const testimonialSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    text: { type: String, required: true }
  },
  { timestamps: true }
);

model('Testimonial', testimonialSchema);
