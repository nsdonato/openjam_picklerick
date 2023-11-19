import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const FavouritesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: String,
  email: String,
  eventId: String,
});

export default mongoose.models.Favourite || mongoose.model('Favourite', FavouritesSchema);
