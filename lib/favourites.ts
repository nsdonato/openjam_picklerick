"use server";
import mongoose from 'mongoose'
import Favourites from "@/models/Favourites";
import dbConnect from "./dbConnect";

type saveFavouriteType = {
  userId: string;
  email: string;
  eventId: string;
  undo?: boolean;
};

export async function saveFavourite(request: saveFavouriteType) {
  await dbConnect();

  if(request.undo) {
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