import React, { useEffect, useState } from "react";
import * as videoService from "./VideoService";
import VideoItem from "./VideoItem";
import { Video } from "./Video";

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const dataApi = await videoService.getVideos();

    const formatedVideos = dataApi?.data
      ?.map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setVideos(formatedVideos);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="row">
      {videos?.map((video) => {
        return (
          <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
        );
      })}
    </div>
  );
};

export default VideoList;
