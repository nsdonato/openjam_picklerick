"use server";
import dbConnect from "./dbConnect";
import Conference from '@/models/Conferences';

export async function getConferences() {
  await dbConnect();

  const conferences = await Conference.find({});
  return conferences;
}