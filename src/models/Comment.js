const serviceLocator = require('../serviceLocator/register');

const mongoose = serviceLocator.get('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    testimonial: { type: Schema.Types.ObjectId, ref: 'Testimonial', required: true },
    comment: { type: String, required: true }
  },
  { timestamps: true }
);

model('Comment', commentSchema);
