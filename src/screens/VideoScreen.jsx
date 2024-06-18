import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../slices/videosApiSlice";

const VideoScreen = () => {
  const { id: videoId } = useParams();

  const { data, isLoading, error } = useGetVideoQuery(videoId);

  // Function to extract the YouTube video ID from the URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\/videos\/|embed\/|shorts\/|youtube.com\/clip\/|https:\/\/m.youtube.com\/watch\?v=|&clip=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  // Call getYouTubeEmbedUrl only if data is available
  const embedUrl = data && data.video.video_url ? getYouTubeEmbedUrl(data.video.video_url) : null;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {embedUrl ? (
        <div className="video-screen-container">
          <iframe
            className="video-screen-frame"
            src={embedUrl}
            allowFullScreen
            title={data.video.title}
          ></iframe>
          <div className="video-details-container">
            <div className="video-details">
              <h2 className="video-title">{data.video.title}</h2>
              <p className="video-user">Uploaded by {data.video.user_id}</p>
              <p className="video-description">{data.video.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Invalid video URL</div>
      )}
    </>
  );
}

export default VideoScreen;

