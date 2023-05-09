import axios from "axios";
import { Video } from "./Video";

// const apiUrl = "http://localhost:3001";
const apiUrl = "https://my-favorite-videos.vercel.app";

/**
 * This function retrieves a list of videos from an API using Axios in TypeScript.
 * @returns The `getVideos` function is returning a Promise that resolves to the result of the
 * `axios.get` call, which is an AxiosResponse object containing the data returned by the API. The data
 * is expected to be an array of `Video` objects.
 */
export const getVideos = async () => {
  const dataApi = await axios.get<Video[]>(`${apiUrl}/videos`);
  return dataApi;
};

/**
 * This function retrieves a video object from an API using its ID.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
 * video. It is used to make a GET request to the API endpoint to retrieve the video data associated
 * with that particular ID.
 * @returns The `getVideo` function is returning a Promise that resolves to an Axios response object
 * containing the data of a video with the specified `id`. The data is of type `Video`, which is likely
 * a custom interface or type defined elsewhere in the codebase.
 */
export const getVideo = async (id: string) => {
  const dataApi = await axios.get<Video>(`${apiUrl}/videos/${id}`);
  return dataApi;
};

/**
 * This function posts a video object to an API endpoint using axios in TypeScript.
 * @param {Video} video - The `video` parameter is an object of type `Video` that contains information
 * about a video. It is being passed as an argument to the `postVideos` function.
 * @returns The `postVideos` function is returning a Promise that resolves to the response data from
 * the POST request made to the specified API endpoint (`/videos`) with the provided `video`
 * data. The response data could be anything depending on the API implementation, but it is likely to
 * be a JSON object containing information about the newly created video resource.
 */
export const postVideos = async (video: Video) => {
  const dataApi = await axios.post(`${apiUrl}/videos`, video);
  return dataApi;
};

/**
 * This function sends a PUT request to the specified API endpoint with a video object as the payload.
 * @param {string} id - The `id` parameter is not being used in the `putVideos` function. It is
 * possible that it was intended to be used as a path parameter in the API endpoint, but it is not
 * currently being used in the `axios.put` call.
 * @param {Video} video - The `video` parameter is an object of type `Video`. It is being passed as the
 * second argument to the `axios.put` method in the `putVideos` function. The `Video` object likely
 * contains information about a video, such as its title, description, URL, and other metadata
 * @returns The function `putVideos` is returning the result of the `axios.put` call, which is a
 * Promise that resolves to the response data from the API.
 */
export const putVideo = async (id: string, video: Video) => {
  const dataApi = await axios.put(`${apiUrl}/videos/${id}`, video);
  return dataApi;
};

/**
 * This function deletes a video from an API using its ID.
 * @param {string} id - The `id` parameter is a string representing the unique identifier of a video
 * that needs to be deleted from the server.
 * @returns The `deleteVideo` function is returning a promise that resolves to the result of the
 * `axios.delete` call, which is an object containing information about the HTTP response from the
 * server.
 */
export const deleteVideo = async (id: string) => {
  const dataApi = await axios.delete(`${apiUrl}/videos/${id}`);
  return dataApi;
};
