import { RequestHandler } from "express";
import Video from "../models/videosModels";

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(204).json({});
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

export const createVideos: RequestHandler = async (req, res) => {
  try {
    const videoFound = await Video.findOne({ url: req.body.url });
    if (videoFound)
      return res.status(301).json({ messge: "this URL already exits" });

    const video = new Video(req.body);
    const saveVideo = await video.save();
    res.status(201).json(saveVideo);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

export const deleteVideos: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) return res.status(204).json({});
    res.status(200).json({ video, message: "deleted video" });
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

export const updateVideos: RequestHandler = async (req, res) => {
  try {
    const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!videoUpdate) return res.status(204).json({});
    res.status(200).json(videoUpdate);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};
