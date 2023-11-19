"use server";
import mongoose from 'mongoose'
import Favourites from "@/models/Favourites";
import dbConnect from "./dbConnect";
import Conferences from '@/models/Conferences';

type saveFavouriteType = {
  userId: string;
  email: string;
  eventId: string;
  undo?: boolean;
};

export async function saveFavourite(request: saveFavouriteType) {
  await dbConnect();

  if (request.undo) {
    await Favourites.deleteOne({ userId: request.userId, eventId: request.eventId });
    return;
  }

  const { userId, email, eventId } = request;
  const favourite = new Favourites({
    _id: new mongoose.mongo.ObjectId(),
    userId,
    email,
    eventId,
  });

  await favourite.save();
}

export async function getFavourites(userId: string) {
  await dbConnect();

  const favourites = await Favourites.find({ userId });

  const conferences = Conferences.find({
    _id: {
      $in: favourites.map((favourite: any) => new mongoose.mongo.ObjectId(favourite.eventId)),
    }
  });

  return conferences;
}