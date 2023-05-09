import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import "./VideoItem.css";
import { servicesVersion } from "typescript";
import * as videoService from "./VideoService";
import { Props } from "./Video";

const VideoItem = ({ video, loadVideos }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    loadVideos();
  };

  return (
    <div
      className="col-md-4"
      style={{ marginBottom: "20px", marginTop: "20px" }}
    >
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
          <h1 onClick={() => navigate(`/update/${video._id}`)}>
            {video.title}
          </h1>
          <span
            className="text-danger"
            onClick={() => video._id && handleDelete(video._id)}
          >
            x
          </span>
        </div>
        <p>{video.description}</p>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <ReactPlayer
            url={video.url}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
