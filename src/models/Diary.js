const serviceLocator = require('../serviceLocator/register');

const mongoose = serviceLocator.get('mongoose');
const { Schema, model } = mongoose;

const diarySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    mood: { type: Array },
    physical_activity: { type: String },
    sleep: { type: String },
    feed: { type: String },
    symptoms: { type: Array },
    date: { type: Date },
    obs: { type: String }
  },
  { timestamps: true }
);

model('Diary', diarySchema);
