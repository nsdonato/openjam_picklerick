import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
  _id: Schema.Types.ObjectId,
  email: String,
  removed: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Subscription || mongoose.model('Subscription', SubscriptionSchema);
