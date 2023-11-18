import Subscriptions from '@/models/Subscriptions';
import dbConnect from './dbConnect';

export const getSubscriptionByEmail = async (email: any) => {
  await dbConnect();
  const subscription = await Subscriptions.find({
    email,
  });
  return subscription[0];
}

