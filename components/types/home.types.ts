export type Events = {
  _id: string;
  date: string | string[];
  title: string;
  urls: {
    type: string;
    url: string;
  }[];
};
