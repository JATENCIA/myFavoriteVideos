import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as videoService from "./VideoService";
import { toast } from "react-toastify";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const initialState = {
    title: "",
    description: "",
    url: "",
  };

  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmi = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await videoService.postVideos(video);
      toast.success("New video added");
      setVideo(initialState);
    } else {
      await videoService.putVideo(params.id, video);
      toast.success("Video updated");
      setVideo(initialState);
    }

    navigate("/");
  };

  const getVideo = async (id: string) => {
    const result = await videoService.getVideo(id);
    const { title, description, url } = result?.data;
    setVideo({ title, description, url });
  };

  useEffect(() => {
    if (params.id) getVideo(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3 className="mb-3">New Video</h3>
            <form onSubmit={handleSubmi}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
                  onChange={handleInputChange}
                  value={video.description}
                ></textarea>
              </div>
              {params.id ? (
                <button className="btn btn-info">Update</button>
              ) : (
                <button className="btn btn-primary">Create</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
