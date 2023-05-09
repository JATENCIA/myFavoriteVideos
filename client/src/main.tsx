import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideoForm, VideoList } from "./components/Videos";
import "bootswatch/dist/pulse/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <div className="container p-4 ">
        <Routes>
          <Route path="/" Component={VideoList} />
          <Route path="/new-video" Component={VideoForm} />
          <Route path="/update/:id" Component={VideoForm} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
