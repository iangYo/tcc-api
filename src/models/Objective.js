const serviceLocator = require('../serviceLocator/register');

const mongoose = serviceLocator.get('mongoose');
const { Schema, model } = mongoose;

const objectiveSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    start_date: { type: Date },
    end_date: { type: Date },
    reason: { type: String }
  },
  { timestamps: true }
);

model('Objective', objectiveSchema);
