export type Events = {
  _id: string;
  eventDate: string | string[];
  title: string;
  urls: {
    type: string;
    url: string;
  }[];
};
