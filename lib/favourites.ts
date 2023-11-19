"use server";
import mongoose from 'mongoose'
import Favourites from "@/models/Favourites";
import dbConnect from "./dbConnect";

type saveFavouriteType = {
  userId: string;
  email: string;
  eventId: string;
};

export async function saveFavourite(request: saveFavouriteType) {
  await dbConnect();

  const { userId, email, eventId } = request;
  const favourite = new Favourites({
    _id: new mongoose.mongo.ObjectId(),
    userId,
    email,
    eventId,
  });

  await favourite.save();
}