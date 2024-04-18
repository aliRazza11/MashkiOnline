import mongoose from 'mongoose';

const laboratorySchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
});

const Laboratory = mongoose.model('Laboratory', laboratorySchema);

export default Laboratory;
