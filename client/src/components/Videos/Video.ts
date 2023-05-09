/* The `interface Video` is defining the structure of an object that represents a video. It has
properties such as `url`, `title`, `description`, `createdAt`, and `updatedAt`. The `url` property
is a required string, while the `_id`, `createdAt`, and `updatedAt` properties are optional and can
be either a string or a Date object. The `title` and `description` properties are also required
strings. This interface can be used to ensure that any object representing a video in the code
follows this structure. */
export interface Video {
  url: string;
  _id?: string;
  title: string;
  description: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

/* The `interface Props` is defining a structure for an object that has a property called `video` which
should be an object that follows the structure defined by the `interface Video`. This can be used to
ensure that any component or function that receives a `Props` object with a `video` property will
expect it to be a valid `Video` object. */
export interface Props {
  video: Video;
  loadVideos: () => void;
}
