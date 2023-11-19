import Subscriptions from '@/models/Subscriptions';
import dbConnect from './dbConnect';
import mongoose from 'mongoose'

export const getSubscriptionByEmail = async (email: string) => {
  await dbConnect();
  const subscription = await Subscriptions.find({
    email,
  });
  return subscription[0];
}

export const saveSubscriver = async (email: string) => {
  await dbConnect();

  const exists = await getSubscriptionByEmail(email);
  if (exists) {
    return {
      ok: false,
      message: 'Email already exists',
    };
  }

  const subscription = new Subscriptions({
    _id: new mongoose.mongo.ObjectId(),
    email,
  });

  const item = await subscription.save();
  return {
    ok: true,
    item,
    message: 'Subscription created successfully',
  };
}